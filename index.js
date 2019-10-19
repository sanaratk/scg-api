import express from 'express';
import router from './src/routers/index';
import { format } from 'url';
const app = express();
const port = 3030

// const express = require('express');
// const router = express.Router();
app.use(`/`, router); 

// var scgController = require('./src/controller')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// ...

// app.use('/', scgController)