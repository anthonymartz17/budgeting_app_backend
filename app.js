const express = require("express");
const transactionController = require("./controllers/transactionController");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/transactions", transactionController);

app.get("/", (req, res) => {
	res.send("Welcome to bugeting app");
});

module.exports = app;
