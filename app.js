import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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
