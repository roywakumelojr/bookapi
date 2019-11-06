const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const booksRouter = require('./books/books-router')

const server = express()
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use('/books', booksRouter)

server.get('/', (req, res) => {
    res.send('Roy\'s our boy!')
})

module.exports = server