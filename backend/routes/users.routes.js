import { Router } from "express";
import { register, login, getUserInfo, logout } from '../controllers/user.controller.js';

// Declare router
const router = Router();

// Define routes
router.post("/register", register);

router.post("/login", login);

router.get("/me",getUserInfo);

router.post("/logout", logout);

// Export router as default
export default router;
