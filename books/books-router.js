const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        book: 'Place holder book'
    })
})


module.exports = router