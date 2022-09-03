import express from "express";
import {
  getAllCustomers,
  register,
  login,
  getByCustomerId,
} from "../controllers/customer-controller";

const customerRouter = express.Router();

customerRouter.get("/", getAllCustomers);
customerRouter.post("/register", register);
customerRouter.post("/login", login);
customerRouter.get("/:id", getByCustomerId);

export default customerRouter;
