const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const path = require("path");

const cors = require("cors");
app.use(cors());
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
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

const InstReg=require('./models/InstReg')

app.post('/instregPost',async(req,res)=>{
    const NOI= req.body.NOI;
    const NOTSR = req.body.NOTSR;
    const NOIA=req.body.NOIA;
    const NOIR = req.body.NOIR;
    const CNOIR= req.body.CNOIR;
    const EAOIR = req.body.EAOIR;

    InstReg.create({
    name_of_inst:              NOI,
    number_of_team_slots_req:  NOTSR,
    number_of_inst_adjud:      NOIA,
    name_of_inst_rep:          NOIR,
    contact_number_of_inst_rep:CNOIR,
    email_of_inst_rep:         EAOIR 
    })
    // res.render("SubmissionSuccessful")   
})



app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });
  
  module.exports = app;