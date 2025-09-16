import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './db.js';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(cors()); // Keep this after the manual headers for fallback
// Serve static files in uploads folder
app.use("/uploads", express.static("uploads"));
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// ✅ API Route for testimonials
import testimonialRoutes from './routes/testimonial.routes.js';
app.use('/api/testimonials', testimonialRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

