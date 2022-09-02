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
  const { amount, currency, recipient, customer } = req.body;

  let existingRecipient;
  try {
    existingRecipient = await Recipient.findById(recipient);
  } catch (err) {
    return console.log(err);
  }
  if (!existingRecipient) {
    return res.status(400).json({ message: "Recipient does not exist" });
  }

  let existingCustomer;
  try {
    existingCustomer = await Customer.findById(customer);
  } catch (err) {
    return console.log(err);
  }
  if (!existingCustomer) {
    return res.status(400).json({ message: "Customer does not exist" });
  }

  const transaction = new Transaction({
    amount,
    currency,
    beneficiary: [],
    benefactor,
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await transaction.save();
    existingRecipient.transactions.push(transaction);
    await existingRecipient.save({ session });
    await existingCustomer.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
  return res.status(200).json({ transaction });
};
