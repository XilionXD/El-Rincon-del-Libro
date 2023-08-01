const express = require("express")
const app = express();
const path = require("path")
app.get("/", (req, res) =>{
   let routePath = path.resolve(__dirname, "./Views/index.html")
   res.sendFile(routePath);
})
 app.listen(3000, ()=>{
    console.log("BIENVENIDOS!")
 })