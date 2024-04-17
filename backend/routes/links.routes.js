import { Router } from "express";
import { shortenUrl, getAllLinks, deleteLink, redirectShortLink } from '../controllers/link.controller.js';

// Declare router
const router = Router();

// Define routes
router.post("/", shortenUrl);

router.get("/",getAllLinks);

router.delete("/:id",deleteLink);

router.get("/:shortCode",redirectShortLink );

// Export router as default
export default router;