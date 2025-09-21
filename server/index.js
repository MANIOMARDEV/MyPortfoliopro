import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ✅ API Route for testimonials
import testimonialRoutes from "./routes/testimonial.routes.js";
app.use("/api/testimonials", testimonialRoutes);

// ----------------------
// React frontend serving
// ----------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientBuildPath = path.join(__dirname, "../client/dist");

// Serve static files from React
app.use(express.static(clientBuildPath));

// All other routes → React index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
