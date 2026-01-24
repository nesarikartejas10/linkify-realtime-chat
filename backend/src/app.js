import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to LinkifyX</h1>");
});

export default app;
