const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dogRoutes = require("./routes/dogRoutes");
const breedRoutes = require("./routes/breedRoutes");
const app = express();

const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

app.use(express.json());
// Routes
app.use("/api/dogs", dogRoutes);
app.use("/api/breeds", breedRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = app;
