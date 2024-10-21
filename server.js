const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3000

// Creating a route
app.get('/',(req, res) => {
    res.send("Hello User!")
})

mongoose.connect('mongodb+srv://Admin:CxSGZf5TnEmZvoB9@vinayak.gyl4s.mongodb.net/?retryWrites=true&w=majority&appName=Vinayak').then(()=> console.log("MongoDB is successfully connected")).catch( err => console.log(err))

app.listen(port , () => {
    console.log(`Example of the app listening on port ${port}`)
})

//  Creating mongoDB model and controllers

