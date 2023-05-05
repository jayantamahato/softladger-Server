import express from "express";
import { addAmount } from "../controller/add.js";
import { fetchData } from "../controller/fetch_balalnce.js";
import { fetchTransactions } from "../controller/fetchTransaction.js";
const router = express.Router();
//fetching avl.bal and transactions
router.get("/", fetchData);
//adding a transaction and update avl.bal
router.post("/add", addAmount);
//fetching transactions only
router.get("/transactions", fetchTransactions);
//delete a transaction
//fatching specific transaction
export default router;
