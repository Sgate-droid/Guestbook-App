import express from "express";
import guestRouter from "./routes/guestRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/guest", guestRouter);

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}...`);
    });
  } catch (error) {
    console.log(`An error occurred while starting the application.\n ${error}`);
  }
};

start();
