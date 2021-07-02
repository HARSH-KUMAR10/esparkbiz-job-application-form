const { application } = require("express");
const express = require("express");
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8001;
const path = require("path");
const DB = require("./Model/db");
const insertObject = require('./Model/insertData');
const updateObject = require('./Model/updateData');

app.use(express.static(path.join(__dirname,'/Views')));
app.use(express.static(path.join(__dirname,'/Views/create')));
app.use(express.static(path.join(__dirname,'/Views/read')));
app.use(express.static(path.join(__dirname,'/Views/update')));
app.use(express.static(path.join(__dirname,'/Views/delete')));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/Views/index.html");
});

app.get("/createApplication",(req,res)=>{
    res.sendFile(__dirname+"/Views/create/createIndex.html");
});

app.get("/readApplication",(req,res)=>{
    res.sendFile(__dirname+"/Views/read/readIndex.html");
});

app.get("/updateApplication",(req,res)=>{
    res.sendFile(__dirname+"/Views/update/updateindex.html");
});

app.get('/deleteApplication',(req,res)=>{
    res.sendFile(__dirname+"/Views/delete/deleteIndex.html");
});

/*
Taking the response of the form for createApplication
*/
app.get('/addApplication',async (req,res)=>{
    var object = await insertObject.put(req);
    DB.collection.insertOne(object,(err,result)=>{
        if(err){
            console.log(err);
            res.send("Error Occured");
        }else{
            res.redirect('/createApplication');
        }
    });
});

/*
Showing all the emails of applications for read Applications
*/

app.get('/showApplications',async (req,res)=>{
    var result = await DB.find({}).select('Email');
    res.json({"result":result});

});

/*
reading the application using Email
*/
app.get('/showApplicationByEmail',async (req,res)=>{
    var userEmail = req.query.Email;
    var result = await DB.findOne({
        "Email":userEmail
    });
    res.json({"result":result});
});

/*
Getting the request for update
*/

app.get('/updateApplicationByEmail',async (req,res)=>{
    var object = await updateObject.update(req);
    DB.findOneAndUpdate({Email:object.Email},object,(err,result)=>{
        if(err){
            console.log(err);
            res.send("Error Occured");
        }else{
            res.redirect('/updateApplication');
        }
    });
});

app.get('/deleteApplicationByEmail',(req,res)=>{
    var nEmail = req.query.Email;
    DB.remove({Email:nEmail},(err)=>{
        if(err) res.json({"deleted":false});
        res.json({"deleted":true});
    });
});

/*
Sending Languages and Technologies Field
*/
app.get('/getFields',(req,res)=>{
    var fields = fs.readFileSync(__dirname+"/Jsons/fields.json");
    fields = JSON.parse(fields);
    res.json(fields);
});

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
});