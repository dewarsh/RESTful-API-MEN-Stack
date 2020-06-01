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
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    //add this data(the above post) to Mongo DB using save method
    post.save()
    .then(data => res.json(data))
    .catch(err => {
        res.json({message: err})
    })
})

module.exports = router