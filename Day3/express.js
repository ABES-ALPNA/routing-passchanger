const express = require("express");
const app=express();
const user = require("./data");
const student = require("./data");



app.listen(7000, ()=>{
    console.log("SERVER STARTED");
});

app.get("/student", (req, res)=>{
    res.send(student);
});

app.get("/about",(req, res) =>{
    res.send("this is my about")
});

app.post("/", (req, res)=>{
    res.send(user);
})