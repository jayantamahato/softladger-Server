import balanceCollection from "../dataBase/schemas/balance.js";
import transactioncollection from "../dataBase/schemas/transaction.js";

export const fetchData = async (req, res) => {
  try {
    //fetching available balance from balance collection
    const balance = await balanceCollection.find({});
    //fetching all transactions from transaction collections
    const transactions = await transactioncollection.find({});
    return res.status(200).json({ message: "fatched sucess", balace: balance, transactions: transactions });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
