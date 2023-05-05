import mongoose from "mongoose";
const balanceSchema = new mongoose.Schema({
  availableBalance: {
    type: Number,
    required: true,
  },
});
const balanceCollection = mongoose.model("balances", balanceSchema);
export default balanceCollection;
