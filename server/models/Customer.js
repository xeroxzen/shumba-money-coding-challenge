import mongoose from "mongoose";

const Schema = mongoose.Types.Schema;

const customerSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  countryOfResidence: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  phoneCode: { type: String, required: true },
  password: { type: String, required: true, minlength: 10 },
  recipients: [
    { type: mongoose.Types.ObjectId, ref: "Recipients", required: true },
  ],
});

export default mongoose.model("Customer", customerSchema);
