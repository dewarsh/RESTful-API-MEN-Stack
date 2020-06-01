const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome to Posts')
})

router.get('/specific', (req, res) => {
    res.send('Welcome to Specific Post')
})

module.exports = router