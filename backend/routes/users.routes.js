import { Router } from "express";
import {
  register,
  login,
  getUserInfo,
  logout,
  // getUserTickets,
  
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.js";

// Declare router
const router = Router();

// Define routes
router.post("/register", register);

router.post("/login", login);

router.get("/me", verifyToken, getUserInfo);

// router.get("/tickets/:userId",verifyToken, getUserTickets);

router.post("/logout", verifyToken, logout);

// Export router as default
export default router;
