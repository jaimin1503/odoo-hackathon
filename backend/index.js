import connect from "./utils/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler, routeNotFound } from "./middlewares/errormiddlewares.js";
import routes from "./routes/index.js";
import http from "http";
import User from "./models/user.js";
import { Server } from "socket.io";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://task-me-bay.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://task-me-bay.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api", routes);
app.use(routeNotFound);
app.use(errorHandler);

connect();

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("userLoggedIn", async (userId) => {
    await User.findByIdAndUpdate(userId, {
      status: "online",
      socketId: socket.id,
    });
    io.emit("updateUserStatus", { userId, status: "online" });
    console.log(userId, "userLoggedIn");
  });

  socket.on("userLogOut", async (userId) => {
    const user = await User.findByIdAndUpdate(userId, {
      status: "offline",
      socketId: null,
    });
    if (user) {
      io.emit("updateUserStatus", { userId: user._id, status: "offline" });
    }
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
