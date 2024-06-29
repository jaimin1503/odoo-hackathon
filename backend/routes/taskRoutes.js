import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";
import { isAdminRoute, protectRoute } from "../middlewares/authmiddlewares.js";

const router = express.Router();
router.post("/create", protectRoute, isAdminRoute, createTask);
router.get("/", protectRoute, getTasks);
router.put("/update/:id", protectRoute, isAdminRoute, updateTask);

export default router;
