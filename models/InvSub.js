const { default: mongoose } = require("mongoose");

const Invsub= mongoose.Schema({
    applying: [],
    name_of_adjudicator:String,
    name_of_inst:String,
    email:String,
    contact:String,
    top10_adj_cred:String,
    top10_debate_cred:String
})

module.exports = mongoose.model("Invited and Subsidized Adjudicator Application",Invsub)