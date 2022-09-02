import mongoose from "mongoose";

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  countryOfResidence: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  phoneCode: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
  recipients: [
    { type: mongoose.Types.ObjectId, ref: "Recipients", required: true },
  ],
  transactions: {
    type: mongoose.Types.ObjectId,
    ref: "Transactions",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Customer", customerSchema);
