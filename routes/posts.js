const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
    res.send('Welcome to Posts')
})

router.get('/specific', (req, res) => {
    res.send('Welcome to Specific Post')
})

router.post('/', (req, res) => {
    console.log(req.body)
})

module.exports = router