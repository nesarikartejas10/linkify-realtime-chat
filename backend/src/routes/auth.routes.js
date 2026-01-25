import express from "express";
import { signUp, signIn, logOut } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signUp", signUp);
authRouter.post("/signIn", signIn);
authRouter.get("/logOut", logOut);

export default authRouter;
