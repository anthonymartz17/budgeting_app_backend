const express = require("express");

const transactionController = express.Router();
const transactionModel = require("../models/transactionModel");

transactionController.get("/", (req, res) => {
	res.status(200).json(transactionModel);
});

module.exports = transactionController;
