import express from "express";
import {
  getAllTransactions,
  createTransaction,
  getTransactionById,
} from "../controllers/transaction-controller";

const transactionRouter = express.Router();

transactionRouter.get("/", getAllTransactions);
transactionRouter.post("/create", createTransaction);
transactionRouter.get("/:id", getTransactionById);

export default transactionRouter;
