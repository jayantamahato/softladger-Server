import transactioncollection from "../dataBase/schemas/transaction.js";

export const fetchTransactions = async (req, res) => {
  try {
    //fetching all transactions from transaction collection
    const transactions = await transactioncollection.find({});
    //     console.log(transactions);
    return res.status(200).json({ message: "fetched sucessful", transactions: transactions });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
