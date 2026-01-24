import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connect to database successfully...");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting to database!!!", err.message);
    });

    await mongoose.connect(
      "mongodb+srv://nesarikartejas10:nesarikartejas10@cluster0.aldeoro.mongodb.net/linkifyX-chat",
    );
  } catch (error) {
    console.log("Failed to connect database!!!", error);
    process.exit(1);
  }
};

export default connectDB;
