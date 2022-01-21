// build your server here and require it from index.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

const ResourceRouter = require('./resource/router')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors()) // cors() returns a (req, res, nex) => { // stuff and then next() }

server.use('/api', ResourceRouter)

server.use('/', (req, res)=>{
    res.send('Unit 4 Week 2 Sprint Challenge!')
})

server.use((err, req, res, next) => { // eslint-disable-line
    console.log('disaster!')
    res.status(err.status || 500).json({
    message: `The Horror: ${err.message}`,
    })
})

module.exports = server;