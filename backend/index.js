import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connect from "./utils/db.js";

connect();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
