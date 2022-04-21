const { default: mongoose } = require("mongoose");

const instreg=mongoose.Schema({
    name_of_inst:              String,
    number_of_team_slots_req:  String,
    number_of_inst_adjud:      String,
    name_of_inst_rep:          String,
    contact_number_of_inst_rep:String,
    email_of_inst_rep:         String  
})


module.exports = mongoose.model("Institutional Slot Registration",instreg);