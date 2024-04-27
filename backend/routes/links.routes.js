import { Router } from "express";
import {
  shortenUrl,
  raiseTicket,
  getAllLinks,
  deleteLink,
  getShortLink,
  redirectShortLink,
} from "../controllers/link.controller.js";
import { verifyToken } from "../middlewares/auth.js";

// Declare router
const router = Router();

// Define routes
router.post("/shorten-link", verifyToken, shortenUrl);

router.post('/ticket', raiseTicket);

router.get("/", verifyToken, getAllLinks);

router.delete("/:id", verifyToken, deleteLink);

router.get("/redirect/:shortCode", redirectShortLink); 

router.get("/:shortCode", getShortLink);

// Export router as default
export default router;
