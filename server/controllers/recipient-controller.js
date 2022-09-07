import Recipient from "../models/Recipient";
import Customer from "../models/Customer";
import mongoose from "mongoose";

export const getAllRecipients = async (req, res, next) => {
  let recipients;
  try {
    recipients = await Recipient.find().populate("sender");
  } catch (err) {
    return console.error(err);
  }
  if (!recipients) {
    return res.status(404).json({ message: "Recipients not found" });
  }
  return res.status(200).json({ recipients });
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
    sender,
  } = req.body;

  let existingCustomer;
  try {
    existingCustomer = await Customer.findById(sender);
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
    sender,
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
    deletedRecipient = await Recipient.findByIdAndDelete(
      req.params.id
    ).populate("sender");
    await deletedRecipient.sender.recipients.pull(deletedRecipient);
    await deletedRecipient.sender.save();
  } catch (err) {
    return console.error(err);
  }
  if (!deletedRecipient) {
    return res.status(404).json({ message: "Recipient not found" });
  }
  return res
    .status(200)
    .json({ message: "Recipient deleted", deletedRecipient });
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

// Get all recipients for a particular sender
export const getBySenderId = async (req, res, next) => {
  let recipients;
  try {
    recipients = await Recipient.find({ sender: req.params.id });
  } catch (err) {
    return console.error(err);
  }
  if (!recipients) {
    return res.status(404).json({ message: "Recipients not found" });
  }
  return res.status(200).json({ recipients });
};
