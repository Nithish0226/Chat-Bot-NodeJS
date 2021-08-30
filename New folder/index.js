const express = require("express")
const app= express()
let port =process.env.PORT || 2626;


app.get("/",(req,res)=>{
    res.send("hai")
})

app.listen(port,()=>{
    console.log(`Nodejs is running on port ${port}`)
})