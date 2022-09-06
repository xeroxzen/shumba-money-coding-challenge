import express from "express";
import {
  createRecipient,
  updateRecipient,
  deleteRecipient,
  getBySenderId,
  getAllRecipients,
  getRecipientById,
} from "../controllers/recipient-controller";

const recipientRouter = express.Router();

recipientRouter.get("/", getAllRecipients);
recipientRouter.post("/add", createRecipient);
recipientRouter.put("/update/:id", updateRecipient);
recipientRouter.delete("/:id", deleteRecipient);
recipientRouter.get("/sender/:id", getBySenderId);
recipientRouter.get("/:id", getRecipientById);

export default recipientRouter;
