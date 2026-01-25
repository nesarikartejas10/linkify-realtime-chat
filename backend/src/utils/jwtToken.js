import jwt from "jsonwebtoken";
import { config } from "../config/envConfig.js";

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, config.jwtSecret, {
    expiresIn: config.tokenExpiresIn,
  });

  return token;
};

export default generateToken;
