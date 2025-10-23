// ----------------------
// React frontend serving
// ----------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientBuildPath = path.join(__dirname, "../client/dist");

// Serve static files from React build
app.use(express.static(clientBuildPath));

// All other routes -> index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// ✅ Use Render's port or fallback to 10000 locally (avoid 5173 conflict)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
