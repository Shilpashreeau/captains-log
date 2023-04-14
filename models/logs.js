const mongoose=require("mongoose");

const captainsSchema=new mongoose.Schema(

{
title:String,
entry:String,
shipIsBroken:{
    type:Boolean,
    default:true,
}

},

{timestamps:true}

)
const captainsLog=mongoose.model("captainsLog",captainsSchema);
module.exports=captainsLog;