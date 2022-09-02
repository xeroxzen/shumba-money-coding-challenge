import express from "express";
import mongoose from "mongoose";
import customerRouter from "./routes/customer-routes";
import recipientRouter from "./routes/recipient-routes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());

// Here we'll have routers
app.use("/api/v1/customers", customerRouter);
app.use("/api/v1/recipients", recipientRouter);

const CONNECTION_URL = process.env.URI;
const PORT = process.env.PORT || 5001;
const DB = process.env.DB

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
