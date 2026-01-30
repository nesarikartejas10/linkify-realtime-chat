import express from "express";
import { config } from "./config/envConfig.js";
import authRoutes from "../src/routes/auth.routes.js";
import connectDB from "./config/db.js";

const app = express();

app.use("/api/auth", authRoutes);

const PORT = config.port || 3000;
app.listen(PORT, async() => {
  console.log(`Server is listen on http://localhost:${PORT}`);
  await connectDB()
});
