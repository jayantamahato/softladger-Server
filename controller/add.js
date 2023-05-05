import balanceCollection from "../dataBase/schemas/balance.js";
import transactioncollection from "../dataBase/schemas/transaction.js";
// import { fetchBalance } from "./fetch_balalnce.js";

export const addAmount = async (req, res) => {
  //getting request data
  const data = req.body;

  //fetching available balance
  const fetchBalanceData = await balanceCollection.find({});

  //initialized "availableBalance" and set fetched balance to it
  var availableBalance = fetchBalanceData[0].availableBalance;

  //initialized "availableBalanceId" and set fetched id to it
  var availableBalanceId = fetchBalanceData[0].id;

  //made an object named as filter and assign it id
  const filter = { _id: availableBalanceId };

  //cheching the type of transaction and update available balance
  data.type == "income" ? (availableBalance = availableBalance + data.amount) : (availableBalance = availableBalance - data.amount);
  //initialized "availableBalance" and set calculated balance to it
  const avlBalData = { availableBalance: availableBalance };

  //validating body data
  const validData = new transactioncollection(data);
  try {
    //saving transaction data
    const result = await validData.save();

    //updateing available balance
    const avlbalRes = await balanceCollection.findOneAndUpdate(filter, avlBalData);

    if (result && avlbalRes) {
      return res.status(201).json({ mesaage: "data saved and update", savedData: result });
    }
    return res.status(200).json({ mesaage: "can not save" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
