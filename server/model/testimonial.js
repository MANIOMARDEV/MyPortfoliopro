// server/routes/testimonial.routes.js
import express from "express";
import Testimonial from "../models/testimonial.model.js"; // ✅ correct path

const router = express.Router();

// Get all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get a single testimonial by ID
router.get("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Create a new testimonial
router.post("/", async (req, res) => {
  try {
    const newTestimonial = new Testimonial(req.body);
    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(400).json({ message: "Invalid data", error });
  }
});

// Update testimonial by ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Update failed", error });
  }
});

// Delete testimonial by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.json({ message: "Testimonial deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error });
  }
});

export default router;
