import express from "express";
import { config } from "./config/envConfig.js";

const app = express();

const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is listen on http://localhost:${PORT}`);
});
