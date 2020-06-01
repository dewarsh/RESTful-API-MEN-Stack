const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        requried: true
    },
    description: {
        type: String,
        requried: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', PostSchema)

//The above statement will create a model name 'Posts' in our Mongo DB Atlas
//and that will have the PostSchema as we have mentioned above in the exports statement 