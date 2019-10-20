import express from 'express';
import scgController from './src/routers/SCGController';
// import * as cors from 'cors';
import { format } from 'url';
const cors = require('cors');
const app = express();
const port = 3030

// const express = require('express');
// const router = express.Router();

// var allowCrossDomain = function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }
app.use(cors());  
app.use(`/`, scgController); 
// var scgController = require('./src/controller')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// ...

// app.use('/', scgController)