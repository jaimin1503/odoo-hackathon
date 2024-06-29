// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
import connect from "./utils/db.js";

// connect();
// const app = express();
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// const port = process.env.PORT || 5555;
// app.listen(port, () => {
//   console.log(`app is listening on port ${port}`);
// });
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
// import dbConnection from "./utils/index.js";
import { errorHandler, routeNotFound } from "./middlewares/errormiddlewares.js";
import routes from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api", routes);
app.use(routeNotFound);
app.use(errorHandler);

connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
