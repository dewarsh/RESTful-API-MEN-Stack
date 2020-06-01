const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//cors is used to provide access control for other domains
//to access apis from our local host domain
app.use(cors())

//whenver a request is made it parses 
//the body of the request into json
app.use(bodyParser.json())

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