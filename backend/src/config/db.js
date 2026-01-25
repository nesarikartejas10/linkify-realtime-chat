import mongoose from "mongoose";
import { config } from "./envConfig.js";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connect to database successfully...");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting to database!!!", err.message);
    });

    await mongoose.connect(`${config.mongodbURL}/linkifyX-chat`);
  } catch (error) {
    console.log("Failed to connect database!!!", error);
    process.exit(1);
  }
};

export default connectDB;
