import express from "express";
import {
  getAllCustomers,
  register,
  login,
} from "../controllers/customer-controller";

const router = express.Router();

router.get("/", getAllCustomers);
router.post("/register", register);
router.post("/login", login);

export default router;
