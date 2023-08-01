const express = require("express")
const app = express();
app.get("/", (req, res) =>{
   res.sendFile("./Views/index.html")
})
 app.listen(3000, ()=>{
    console.log("BIENVENIDOS!")
 })