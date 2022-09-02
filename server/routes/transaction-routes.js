import express from "express";
import {
  getAllTransactions,
  createTransaction,
} from "../controllers/transaction-controller";

const transactionRouter = express.Router();

transactionRouter.get("/", getAllTransactions);
transactionRouter.post("/create", createTransaction);

export default transactionRouter;
