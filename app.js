const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

//Middlewares
app.use('/posts', () => {
    console.log("This is a middleware that runs when navigated to Posts")
})
//Middlewares are the functions that run immediately when we 
//navigate to the mentioned route

// app.use(auth)
//For Example - We can have authentication that needs to be ran
//Before we navigate a user to his account when he logs in and also other routes in his account


//Routes
app.get('/', (req, res) => {
    res.send('We are on Home Page')
})

app.get('/posts', (req, res) => {
    res.send('We are on Posts')
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true ,
      useUnifiedTopology: true },
    () => {
      console.log('Connected to DB!')
})

app.listen(3000)