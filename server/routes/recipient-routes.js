import express from "express";
import {
  createRecipient,
  updateRecipient,
  deleteRecipient,
  getByCustomerId,
} from "../controllers/recipient-controller";

const recipientRouter = express.Router();

recipientRouter.post("api/v1/recipient/create", createRecipient);
recipientRouter.put("api/v1/recipient/update/:id", updateRecipient);
recipientRouter.delete("api/v1/recipient/:id", deleteRecipient);
recipientRouter.get("api/v1/recipient/:id", getByCustomerId);

export default recipientRouter;
