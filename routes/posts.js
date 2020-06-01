const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
    res.send('Welcome to Posts')
})

router.get('/specific', (req, res) => {
    res.send('Welcome to Specific Post')
})

//Create a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    //add this data(the above post) to Mongo DB using save method
    try {
        const postCreated = await post.save()
        res.json(postCreated)
    }
    catch(err) {
        res.json({ message: err })
    }
})

module.exports = router