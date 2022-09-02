import Recipient from "../models/Recipient";
import Customer from "../models/Customer";
import mongoose from "mongoose";

export const getAllRecipients = async (req, res, next) => {
  let beneficiaries;
  try {
    beneficiaries = await Recipient.find().populate("benefactor");
  } catch (err) {
    return console.error(err);
  }
  if (!beneficiaries) {
    return res.status(404).json({ message: "Beneficiaries not found" });
  }
  return res.status(200).json({ beneficiaries });
};

export const createRecipient = async (req, res, next) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber,
    countryOfResidence,
    cityOrTown,
    benefactor, //customer
  } = req.body;

  let existingCustomer;
  try {
    existingCustomer = await Customer.findById(benefactor);
  } catch (err) {
    return console.log(err);
  }
  if (!existingCustomer) {
    return res.status(400).json({ message: "Customer does not exist" });
  }
  const recipient = new Recipient({
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber,
    countryOfResidence,
    cityOrTown,
    benefactor: customer, //customer
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await recipient.save();
    existingCustomer.recipients.push(recipient);
    await existingCustomer.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
  return res.status(200).json({ recipient });
};

export const updateRecipient = async (req, res, next) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber,
    countryOfResidence,
    cityOrTown,
  } = req.body;

  let updatedRecipient;
  try {
    updatedRecipient = await Recipient.findByIdAndUpdate(req.params.id, {
      firstName,
      middleName,
      lastName,
      email,
      phoneNumber,
      countryOfResidence,
      cityOrTown,
    });
  } catch (err) {
    return console.error(err);
  }
  if (!updatedRecipient) {
    return res.status(404).json({ message: "Recipient not found" });
  }
  if (!updatedRecipient) {
    return res.status(500).json({ message: "Recipient not updated" });
  }
  return res.status(200).json({ updatedRecipient });
};

export const deleteRecipient = async (req, res, next) => {
  let deletedRecipient;
  try {
    deletedRecipient = await Recipient.findByIdAndDelete(req.params.id);
  } catch (err) {
    return console.error(err);
  }
  if (!deletedRecipient) {
    return res.status(404).json({ message: "Recipient not found" });
  }
  return res.status(200).json({ deletedRecipient });
};

export const getRecipientById = async (req, res, next) => {
  let recipient;
  try {
    recipient = await Recipient.findById(req.params.id);
  } catch (err) {
    return console.error(err);
  }
  if (!recipient) {
    return res.status(404).json({ message: "Recipient not found" });
  }
  return res.status(200).json({ recipient });
};

export const getByCustomerId = async (req, res, next) => {
  let recipients;
  try {
    recipients = await Recipient.find({ customer: req.params.id });
  } catch (err) {
    return console.error(err);
  }
  if (!recipients) {
    return res.status(404).json({ message: "Recipients not found" });
  }
  return res.status(200).json({ recipients });
};
