import cors from "cors";
import DbConnection from "./dataBase/dbConfig.js";
import express from "express";
import router from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.use("/", router);
DbConnection();
app.listen(port, () => console.log(` app listening on port ${port}!`));
