const express = require("express");
const connectDb = require("./config/db")
const todoschema = require("./models/todo")
connectDb();
const app = express();
const PORT =3000

app.get("/get",(req,res)=>{
    res.send("Get Route")
})
app.post("/post",(req,res)=>{
    res.send("Post Route")
})
app.put("/put",(req,res)=>{
    res.send("Put Route")
})
app.delete("/delete",(req,res)=>{
    res.send("Delete Route")
})
 app.listen(PORT,()=>{
    console.log(`Server running is on http://localhost:${PORT})`)
})