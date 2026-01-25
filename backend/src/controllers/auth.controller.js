import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/jwtToken.js";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required!!!" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be atleast 6 characters!!!",
      });
    }

    const existUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existUser) {
      return res.status(400).json({
        success: false,
        message:
          existUser.username === username
            ? "Username is already taken!!!"
            : "Email is already registered!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = generateToken(newUser._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000,
      sameSite: "none",
      secure: false,
    });

    return res
      .status(201)
      .json({ success: true, message: "User registered successfully.", token });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error in registering user!!!" });
  }
};
