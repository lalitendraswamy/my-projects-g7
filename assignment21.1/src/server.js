// const {express}=require("express")
// const app=express()
const express = require('express');
const app = express();
const {mongoose}=require('mongoose')
const {mongodb}=require(mongodb)

//db connection
mongoose.connect("mongodb://localhost:27017/g7cr_202408").then(()=>{
    console.log("db connected successfully")
})
// mongodb.connect("")

const bookSchema = new mongoose.Schema({}, { strict: false });
const books = mongoose.model('books', bookSchema);

app.get("/getbooks",async(req,res)=>{
    try{
        let data=await books.find()
        console.log(data)
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
   
})

app.post("add book",(req,res)=>{
    try{
        let data=req.data()

    }
    catch(err){
        console.log(err)
    }
})

.listen((3000),()=>{
    console.log("server up and running")
})