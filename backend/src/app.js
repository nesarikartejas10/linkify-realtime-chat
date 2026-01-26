import express from "express";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "./config/envConfig.js";

const app = express();

app.use(
  cors({
    origin: config.frontendURL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to LinkifyX</h1>");
});

export default app;
