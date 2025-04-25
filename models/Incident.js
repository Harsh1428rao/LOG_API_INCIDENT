const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    severity:{
        type:String,
        required:true,
        enum:["Low","Medium","High"]
    },
    reported_at:{type:Date,default:Date.now}
});

module.exports=mongoose.model("Incident",incidentSchema);