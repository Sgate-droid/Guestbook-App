import express from "express";
import { submitForm } from "../controller/guest-controller.js";

const guestRouter = express.Router();

guestRouter.post("/submitForm", submitForm);

export default guestRouter;
