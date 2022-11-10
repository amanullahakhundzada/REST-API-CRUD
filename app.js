const express=require("express")
const mongoose=require("mongoose")
const url="mongodb://localhost/AlienDBex"
const app=express();
const PORT=process.env.PORT||3000

mongoose.connect(url,{useNewUrlParser:true})
const con =mongoose.connection
con.on("open",function(){console.log("connected...")})
app.use(express.json())
const alienRouter=require("./routes/aliens")
app.use("/aliens",alienRouter)


app.listen(PORT,()=>{console.log(`App is running at http://localhost:${PORT}`)})

