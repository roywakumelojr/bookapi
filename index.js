const express = require('express');

require('dotenv').config();
const port = process.env.PORT || 4200

const cors = require('cors');
const helmet = require('helmet');


const server = express()
server.get('/', (req, res) => {
    res.send('Roy\'s our boy!')
})


server.listen(port, () => {
    console.log(`server running on port ${port}`)
})