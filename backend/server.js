const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const connectDb=require("./config/connectionDb")

const PORT=process.env.PORT || 3000
app.use(express.json())
app.use("/recipe",require("./routes/recipe"))

const startServer = async () => {
    try {
        const connected = await connectDb()
        if (!connected) {
            console.warn("Starting API without a database connection.")
        }
        app.listen(PORT,()=>{
            console.log(`app is listening on port ${PORT}`)
        })
    } catch (err) {
        console.error("Server failed to start because the database connection could not be established.")
    }
}

startServer()