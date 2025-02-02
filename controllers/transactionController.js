const { nanoid } = require("nanoid");

const express = require("express");
const transactionController = express.Router();
const transactionModel = require("../models/transactionModel");

//index
transactionController.get("/", (req, res) => {
	res.status(200).json(transactionModel);
});

//show
transactionController.get("/:id", (req, res) => {
	const { id } = req.params;
	const transaction = transactionModel.find((tran) => tran.id === id);
	if (transaction) {
		res.status(200).json(transaction);
	} else {
		res.status(404).json({ error: `Transaction with id:${id} not found` });
	}
});

//create

transactionController.post("/", (req, res) => {
	// console.log(nanoid(4))
	transactionModel.push({ id: nanoid(), ...req.body });
	const addedTranx = transactionModel[transactionModel.length - 1];
	res.status(200).json(addedTranx);
});

//update
transactionController.put("/:id", (req, res) => {
	const { id } = req.params;
	const idx = transactionModel.findIndex((tranx) => tranx.id === id);

	if (idx !== -1) {
		transactionModel[idx] = { ...transactionModel[idx], ...req.body };
		res.status(200).json(transactionModel[idx]);
	} else {
		res.status(404).json({ error: `Transaction with id:${id} not found` });
	}
});

//delete
transactionController.delete("/:id", (req, res) => {
	const { id } = req.params;
	const idx = transactionModel.findIndex((tranx) => tranx.id === id);

	if (idx !== -1) {
		const removedTranx = transactionModel.splice(idx, 1)[0];
		res.status(200).json(removedTranx);
	} else {
		res.status(404).json({ error: `Transaction with id:${id} not found` });
	}
});

module.exports = transactionController;
