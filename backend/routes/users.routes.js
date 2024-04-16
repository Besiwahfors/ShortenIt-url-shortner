import { Router } from "express";

// Declare router
const router = Router();

// Define routes
router.post("/api/users/register", (req, res) => {
  res.json("Register new user");
});

router.post("/api/users/login", (req, res) => {
  res.json("Login existing user");
});

router.get("/api/users/me", (req, res) => {
  res.json("Get logged in user profile");
});

router.post("/api/users/logout", (req, res) => {
  res.json("Logout a logged in user");
});

// Export router as default
export default router;
