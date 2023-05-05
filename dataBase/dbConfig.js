import mongoose from "mongoose";
const URL = "mongodb://127.0.0.1:27017/SoftLadger";
const DbConnection = async () => {
  try {
    await mongoose.connect(URL);
    console.log("database connected sucessful");
  } catch (error) {
    console.log("database is not connected\n", error);
  }
};
export default DbConnection;
