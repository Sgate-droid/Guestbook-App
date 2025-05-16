import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import formRoutes from "./routes/formRoutes.js";

const app = express();
const port = 3000;

//Define ESM scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// ejs as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", formRoutes);

app.listen(port, () => {
  console.log("server is running at http://localhost:3000");
});
