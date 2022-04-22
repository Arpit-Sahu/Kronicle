const { default: mongoose } = require("mongoose");

const NonInst= mongoose.Schema({
    team_name:String,
    name_of_team_rep:String,
    email_of_team_rep:String,
    contact_of_team_rep:String,
})

module.exports = mongoose.model("Cross/Non-institutional Team Registration",NonInst)