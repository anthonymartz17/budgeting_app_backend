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

app.get("*", (req, res) => {
	const error = new Error("Page not found");
	error.status = 404;
	res.status(404).json({ msg: error.message, status: error.status });
});

module.exports = app;
