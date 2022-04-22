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
const Invsub= require("./models/InvSub")
const NonInst =require("./models/NonInst")
const AdjReg = require("./models/Adjreg")
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
    }).then((result)=>{
        res.render("regisSuccess")
    })
    // res.render("SubmissionSuccessful")   
})

app.post('/invsubPost',async(req,res)=>{
    console.log(req.body);
    Invsub.create({
    applying: [req.body.checks],
    name_of_adjudicator: req.body.NOA,
    name_of_inst: req.body.NOI,
    email:req.body.Email,
    contact:req.body.Contact,
    top10_adj_cred:req.body.T10AC,
    top10_debate_cred:req.body.T10DC

    }).then((result)=>{
        res.render("regisSuccess")
    })
})

app.post('/noninstPost',async(req,res)=>{
    NonInst.create({
    team_name:req.body.team,
    name_of_team_rep:req.body.NOTR,
    email_of_team_rep:req.body.EAOTR,
    contact_of_team_rep:req.body.CNOTR,
    }).then((result)=>{
        res.render("regisSuccess")
    })

})

app.post('/adjregPost',async(req,res)=>{
    AdjReg.create({
    number_of_adjud: req.body.NOA,
    name_of_inst:    req.body.NOI,
    email_addr:      req.body.Emailaddr ,
    contact_number:  req.body.CON, 
    }).then((result)=>{
        res.render("regisSuccess")
    })
})

app.post('/contactdata',async(req,res)=>{
    console.log(req.body);
})


app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });
  
  module.exports = app;