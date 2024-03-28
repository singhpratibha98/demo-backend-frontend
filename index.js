console.log("djnds");


const express = require("express");
const app =express();
const cors = require("cors");
const path = require("path");



// app.use(cors({
//     origin:"http://localhost:5173"
// }));

app.use(express.static(path.join(__dirname,'dist')));  //we have make optimised package of frontend as (/dist) and put it in backend and usko use krne ke liye we are using middleware here not the cors .




app.get("/abc",(req,res)=>{
    res.json({
        success:true,
        message:"we are getting the data",
    });
})

app.listen(10000,()=> console.log("app is listening"));