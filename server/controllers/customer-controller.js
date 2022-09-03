import Customer from "../models/Customer";
import bcrypt from "bcryptjs";

export const getAllCustomers = async (req, res, next) => {
  let customers;
  try {
    customers = await Customer.find();
  } catch (err) {
    return console.error(err);
  }
  if (!customers) {
    return res.status(404).json({ message: "Customer not found" });
  }
  return res.status(200).json({ customers });
};

export const register = async (req, res, next) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    countryOfResidence,
    phoneCode,
    phoneNumber,
    password,
  } = req.body;
  let existingCustomer;

  try {
    existingCustomer = await Customer.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingCustomer) {
    return res
      .status(400)
      .json({ message: "Customer already exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const customer = new Customer({
    firstName,
    middleName,
    lastName,
    email,
    countryOfResidence,
    phoneCode,
    phoneNumber,
    password: hashedPassword,
    recipients: [],
  });

  try {
    await customer.save();
  } catch (err) {
    return console.log(err);
  }

  return res.status(201).json({ customer }); //201 => customer is created
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingCustomer;

  try {
    existingCustomer = await Customer.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingCustomer) {
    return res.status(400).json({ message: "Customer does not exist" });
  }
  const isValidPassword = bcrypt.compareSync(
    password,
    existingCustomer.password
  );
  if (!isValidPassword) {
    return res.status(400).json({ message: "Invalid password" });
  }
  return res.status(200).json({ message: "Login successful" });
};

export const getByCustomerId = async (req, res, next) => {
  const customerId = req.params.id;
  let customer;
  try {
    customer = await Customer.findById(customerId);
  } catch (err) {
    return console.log(err);
  }
  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }
  return res.status(200).json({ customer });
};
