const express = require("express");
const mongoose=require("mongoose")
const path = require("path");
const bodyParser = require("body-parser");
const connectMongodb = require("./init/mongoDb");
const Todo =require("./models/Todo");
const todoRoute = require("./routes/todo");
const dotenv = require("dotenv");

//environment variable
dotenv.config(); 

// Initialize app
const app = express();

//mongodb connection
connectMongodb();


// View engine setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", todoRoute); 

// Routes


// Listen server

module.exports = app;