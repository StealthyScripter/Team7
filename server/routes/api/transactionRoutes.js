import express from "express";
import {
  addTransaction,
  getTransactions,
  removeTransaction,
  getFinancialSummary
} from "../../controllers/userController.js";

const router = express.Router();

// /api/transactions
router.post("/", addTransaction);
router.get("/", getTransactions);
router.get("/summary", getFinancialSummary);
router.delete("/:transactionId", removeTransaction);

export default router;
