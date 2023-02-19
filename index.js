const express = require("express");
const app = express();
const port = 3001;
app.get("/",(req,res)=>{
    console.log(req);
    res.send("Hii reshma");
});
app.listen(port,()=>{
    console.log("Application started");
});