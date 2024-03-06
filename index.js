module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
const express = require("express");
const app = express();
var router = require("express").Router();
require("dotenv").config();
app.use(express.json());
const connectDB = require("./connectMongo");
connectDB();
const BookModel = require("./models/tutorial.model");
const redis = require('./redis')

var router = require("express").Router();

// Create a new Tutorial
router.post("/", tutorials.create);

// Retrieve all Tutorials
router.get("/", tutorials.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", tutorials.findOne);

// Update a Tutorial with id
router.put("/:id", tutorials.update);

// Delete a Tutorial with id
router.delete("/:id", tutorials.delete);

// Create a new Tutorial
router.delete("/", tutorials.deleteAll);

app.use("/api/tutorials", router);


};
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
