import express from "express";
import {
  getAllCustomers,
  register,
  login,
} from "../controllers/customer-controller";

const router = express.Router();

router.get("api/v1/customers/", getAllCustomers);
router.post("api/v1/auth/register", register);
router.post("auth/v1/auth/login", login);

export default router;
