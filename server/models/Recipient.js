import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recipientSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  countryOfResidence: { type: String, required: true },
  cityOrTown: { type: String, required: true },
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "Customer",
    required: true,
  },

  transaction: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Transactions",
      required: false,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Recipient", recipientSchema);
