const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//Fetch all posts
router.get('/', async (req, res) => {
    try{
        const allPosts = await Post.find()
        res.json(allPosts)
    }
    catch(err) {
        res.json({ message: err })
    }
})

//Fetching an individual post
router.get('/:postId', async (req, res) => {
    try{
        const individualPost = await Post.find({_id: req.params.postId})
        // OR
        // const individualPost = await Post.findById(req.params.postId)
        res.json(individualPost)
    }
    catch(err) {
        res.json({ message: err })
    }
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

//Delete a post
router.delete('/:postId', async (req, res) => {
    try{
        // const deletedPost = await Post.remove({_id: req.params.postId})
        // as the above throws error - collection.remove is depreacated
        // OR
        const deletedPost = await Post.deleteOne({_id: req.params.postId})
        res.json(deletedPost)
    }
    catch(err) {
        res.json({ message: err })
    }
})

//Update a Post
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne( {_id: req.params.postId}, 
            { $set: { title: req.body.title } }
        )
        res.json(updatedPost)
    }
    catch(err) {
        res.json({ message: err })
    }
})

module.exports = router