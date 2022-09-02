import express from "express";
import {
  getAllCustomers,
  register,
  login,
} from "../controllers/customer-controller";

const customerRouter = express.Router();

customerRouter.get("/", getAllCustomers);
customerRouter.post("/register", register);
customerRouter.post("/login", login);

export default customerRouter;
