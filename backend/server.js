import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = process.env.port || 8000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
};

startServer();
