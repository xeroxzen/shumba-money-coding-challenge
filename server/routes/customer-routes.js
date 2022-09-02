import express from "express";
import {
  getAllCustomers,
  register,
  login,
  deleteCustomer,
} from "../controllers/customer-controller";

const router = express.Router();

router.get("/", getAllCustomers);
router.post("/register", register);
router.post("/login", login);
router.delete("/:id", deleteCustomer);

export default router;
