import { Router } from "express";
import {
  shortenUrl,
  getAllLinks,
  deleteLink,
  redirectShortLink,
} from "../controllers/link.controller.js";
import { verifyToken } from "../middlewares/auth.js";

// Declare router
const router = Router();

// Define routes
router.post("/", verifyToken, shortenUrl);

router.get("/", verifyToken, getAllLinks);

router.delete("/:id", verifyToken, deleteLink);

router.get("/:shortCode", redirectShortLink);

// Export router as default
export default router;
