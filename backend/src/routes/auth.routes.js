import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("SignUp Route");
});

router.get("/login", (req, res) => {
  res.send("LogIn Route");
});

router.get("/logout", (req, res) => {
  res.send("LogOut Route");
});

export default router;
