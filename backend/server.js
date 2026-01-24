import app from "./src/app.js";

const PORT = process.env.port || 8000;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is listening on http://lcoalhost:${PORT}`);
  });
};

startServer();
