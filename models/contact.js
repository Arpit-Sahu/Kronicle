const { default: mongoose } = require("mongoose");

const contact=mongoose.Schema({
    name: String,
    email:    String,
    subject:      String ,
    msg:  String, 
})


module.exports = mongoose.model("CONTACT DETAILS",contact);