const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task:{type:String,require:true},
    completed:{type:Boolean,default:false}
})

module.exports = new mongoose.model("todo",todoSchema);