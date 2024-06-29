import express from "express";
import { isAdminRoute, protectRoute } from "../middlewares/authmiddlewares.js";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";

const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
