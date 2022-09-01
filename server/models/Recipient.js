import mongoose, { modelNames } from "mongoose";

const Schema = mongoose.Schema;

const recipientSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  countryOfResidence: { type: String, required: true },
  cityOrTown: { type: String, required: true },
  benefactor: [
    { type: mongoose.Types.ObjectId, ref: "Customer", required: true },
  ],
});

export default mongoose.model("Recipient", recipientSchema);
