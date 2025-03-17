// src/app.js
const express = require('express');
const connectDB = require('./config/database');

const app = express();

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    console.log('API main app');
    res.send('<h1>Welcome to my REST API</h1>');
});

module.exports = app;

