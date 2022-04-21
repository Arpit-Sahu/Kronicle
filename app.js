const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const path = require("path");

const cors = require("cors");
app.use(cors());
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static('assets'));
app.use(express.static(path.join(__dirname, 'assets')));
app.get('/',async (req,res)=>{
  res.render("index")
})

app.get('/instreg', async(req,res)=>{
    res.render("InstReg")
})
app.get('/invsub', async(req,res)=>{
    res.render("InvSub")
})
app.get('/noninst', async(req,res)=>{
    res.render("NonInst")
})
app.get('/adjreg', async(req,res)=>{
    res.render("AdjReg")
})



app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });
  
  module.exports = app;