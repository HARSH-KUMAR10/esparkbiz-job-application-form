const mongoose = require('mongoose');
var db = 'mongodb+srv://root:root123@cluster0.fuz20.mongodb.net/Esparkbiz_1?retryWrites=true&w=majority';

mongoose.connect(db,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log("Error : "+err);
});
/*
let personal = new mongoose.Schema({
    Fname:String,
    Lname:String,
    Designation:String,
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    Address:String,
    City:String,
    Pincode:Number,
    State:String,
    Phone:Number,
    Gender:String,
    DOB:date,
    Status:String
  });
var board = new mongoose.Schema({
    Name:String,
    University:String,
    Year:Number,
    Percentage:Number
});
var education = new mongoose.Schema({
    boards:[board]
});
*/

var Schema = mongoose.Schema;

var job_application = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    personal:Schema.Types.Mixed,
    education:Schema.Types.Mixed,
    work:Schema.Types.Mixed,
    Languages:Schema.Types.Mixed,
    technologies:Schema.Types.Mixed,
    contact:Schema.Types.Mixed,
    preferences:Schema.Types.Mixed
})
  
  module.exports = mongoose.model('job_application', job_application)