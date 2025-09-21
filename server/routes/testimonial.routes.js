// server/routes/testimonial.routes.js
import express from "express";

const router = express.Router();

// ✅ Health check route for testimonials API
router.get("/", (req, res) => {
res.json({ message: "Testimonials API is working ✅" });
});

export default router;
