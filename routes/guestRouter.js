import express from "express";
import { submitForm } from "../controller/guest-controller.js";
import { getGuestsInfo } from "../controller/guest-controller.js";

const guestRouter = express.Router();

guestRouter.post("/submitForm", submitForm);
guestRouter.get("/allGuests", getGuestsInfo);

export default guestRouter;
