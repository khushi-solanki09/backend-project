import dotenv from "dotenv"
import connectDb from "./db/index.js"
 
dotenv.config({
    path: './env'
})





/*import express from "express"

const app = express()
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error", error)
            throw err
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error : ", error)
        throw err
    }
})()*/