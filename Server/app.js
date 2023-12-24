const express = require('express');
const mysql = require('mysql2');
const config = require("config");
const cors = require("cors");

const hotelOwnerRoute = require("./routes/hotelOwner");
const superAdminRoute = require("./routes/superAdmin");
const customer = require("./routes/customer");
const homepage = require("./routes/homepage");
const login = require("./routes/login");
const signup = require("./routes/signup");



const app = express();

app.use(cors("*"));
app.use(express.json());

app.use("/hotelowner",hotelOwnerRoute);
app.use("/superadmin",superAdminRoute);
app.use("/customer",customer);
app.use("/homepage",homepage);
app.use("/login",login);
app.use("/signup",signup);

app.listen(5000,()=>{
    console.log("Server Started on port 5000");
});
