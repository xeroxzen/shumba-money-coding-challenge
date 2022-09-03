import Transaction from "../models/Transaction";
import Recipient from "../models/Recipient";
import Customer from "../models/Customer";
import mongoose from "mongoose";

export const getAllTransactions = async (req, res, next) => {
  let transactions;
  try {
    transactions = await Transaction.find().populate("recipient");
  } catch (err) {
    return console.error(err);
  }
  if (!transactions) {
    return res.status(404).json({ message: "Transactions not found" });
  }
  return res.status(200).json({ transactions });
};

export const createTransaction = async (req, res, next) => {
  const { amount, currency, status, recipient, sender } = req.body;

  let existingReceiver;
  try {
    existingReceiver = await Recipient.findById(recipient);
  } catch (err) {
    return console.log(err);
  }
  if (!existingReceiver) {
    return res.status(400).json({ message: "Recipient does not exist" });
  }

  let existingSender;
  try {
    existingSender = await Customer.findById(sender);
  } catch (err) {
    return console.log(err);
  }
  if (!existingSender) {
    return res.status(400).json({ message: "Customer does not exist" });
  }

  const transaction = new Transaction({
    amount,
    currency,
    status,
    recipient,
    sender,
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await transaction.save();
    existingReceiver.transactions.push(transaction);
    await existingReceiver.save({ session });
    // await existingCustomer.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
  return res.status(200).json({ transaction });
};

export const getTransactionById = async (req, res, next) => {
  const transactionId = req.params.id;
  let transaction;
  try {
    transaction = await Transaction.findById(transactionId).populate(
      "recipient"
    );
  } catch (err) {
    return console.error(err);
  }
  if (!transaction) {
    return res.status(404).json({ message: "Transaction not found" });
  }
  return res.status(200).json({ transaction });
};
