const express = require('express');
const helmet = require('helmet');

const recipeRouter = require('./routes/recipe-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipeRouter);

module.exports = server;
