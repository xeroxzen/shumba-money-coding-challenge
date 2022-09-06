import express from "express";
import mongoose from "mongoose";
import customerRouter from "./routes/customer-routes";
import recipientRouter from "./routes/recipient-routes";
import transactionRouter from "./routes/transaction-routes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());

// Here we'll have routers
app.use("/api/v1/customers", customerRouter);
app.use("/api/v1/recipients", recipientRouter);
app.use("/api/v1/transactions", transactionRouter);

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const CONNECTION_URL = process.env.URI;
const PORT = process.env.PORT || 5001;
const DB = process.env.DB;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// Redundant but let's check if we're running
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
