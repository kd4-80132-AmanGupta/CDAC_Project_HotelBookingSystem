const express = require("express");
const mysql = require("mysql2");
const config = require("config");
const Router = express.Router();


Router.get("/", (request, response) => {
  response.send("Customer");
});

Router.post("/", (request, response) => {
 
});

module.exports = Router;
