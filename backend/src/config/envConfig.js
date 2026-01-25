import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT,
  mongodbURL: process.env.MONGODB_URL,
  jwtSecret: process.env.JWT_SECRET,
  tokenExpiresIn: process.env.TOKEN_EXPIRES_IN,
};

export const config = Object.freeze(_config);
