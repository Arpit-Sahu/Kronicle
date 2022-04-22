const { default: mongoose } = require("mongoose");

const adjreg=mongoose.Schema({
    number_of_adjud: String,
    name_of_inst:    String,
    email_addr:      String ,
    contact_number:  String, 
})


module.exports = mongoose.model("Independent Adjudicator Registration",adjreg);