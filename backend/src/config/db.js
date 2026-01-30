import mongoose from "mongoose";
import { config } from "./envConfig.js";

const connectDB = async () => {
  try {
    const mongoConnect = await mongoose.connect(`${config.mongoURI}/linkify`);
    console.log(
      `MongoDb connect successfully: ${mongoConnect.connection.host}`,
    );
  } catch (error) {
    console.error("Failed to connect MongoDb:", error);
    process.exit(1);
  }
};

export default connectDB;
