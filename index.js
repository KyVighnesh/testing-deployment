const express = require ("express")

const cors = require("cors")

const app = express()


app.use(cors())


app.use(express.json());


app.get("/",(req,res)=> {
    res.json({
        message:"Success"
    })
})


app.listen(8080,()=> {
    console.log("Server running on port 8080")
})


