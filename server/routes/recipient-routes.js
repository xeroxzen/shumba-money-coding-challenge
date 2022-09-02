import express from "express";
import {
  createRecipient,
  updateRecipient,
  deleteRecipient,
  getByCustomerId,
  getAllRecipients,
  getRecipientById,
} from "../controllers/recipient-controller";

const recipientRouter = express.Router();

recipientRouter.get("/", getAllRecipients);
recipientRouter.post("/create", createRecipient);
recipientRouter.put("/update/:id", updateRecipient);
recipientRouter.delete("/:id", deleteRecipient);
recipientRouter.get("/customer/:id", getByCustomerId);
recipientRouter.get("/:id", getRecipientById);

export default recipientRouter;
