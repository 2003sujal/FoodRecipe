const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const connectDb=require("./config/connectionDb")
const cors=require("cors")

const PORT=process.env.PORT || 3000
connectDb()

app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"] }))
app.use(express.json())
app.use(express.static("public"))
app.use("/recipe",require("./routes/recipe"))   
app.use("/user",require("./routes/user"))
app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`)
})
