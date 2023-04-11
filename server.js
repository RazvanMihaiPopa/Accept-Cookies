const express = require("express");
const mongoose = require("mongoose");
const app = express();

const url = "mongodb+srv://stefania-vl:passwd@cluster0.iyelsdl.mongodb.net/?retryWrites=true&w=majority"

async function connect(){
    try{
        await mongoose.connect(url);
        console.log("connected mongodb");
    }catch(error){
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000");
});