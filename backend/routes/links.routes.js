import { Router } from "express";

// Declare router
const router = Router();

// Define routes
router.post("/api/links", (req, res) => {
  res.json("Shorten a long URL");
});

router.get("/api/links",(req, res) => {
  res.json("Get all existing short links to display");
});

router.delete("/api/links/:id", (req, res) => {
  res.json("Delete an existing short link");
});

router.get("/api/links/:shortCode", (req, res) => {
  res.json("Visit a short link for redirection");
});

// Export router as default
export default router;