const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.json())
//whenver a request is made it parses 
//the body of the request into json

//Import Routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)

//Routes
app.get('/', (req, res) => {
    res.send('We are on Home Page')
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true ,
      useUnifiedTopology: true },
    () => {
      console.log('Connected to DB!')
})

app.listen(3000)