import mongoose from "mongoose";

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  countryOfResidence: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  recipient: [
    { type: mongoose.Types.ObjectId, ref: "Recipient", required: true },
  ],
  // transaction: [
  //   { type: mongoose.Types.ObjectId, ref: "Transaction", required: true },
  // ],

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Customer", customerSchema);
