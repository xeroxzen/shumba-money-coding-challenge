import mongoose from "mongoose";

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, required: true },
  sender: {
    type: mongoose.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  recipient: {
    type: mongoose.Types.ObjectId,
    ref: "Recipient",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Transaction", transactionSchema);
