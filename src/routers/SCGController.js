import express from 'express';
import findXYZ from '../scg/findXYZ';
import findRestaurant from '../scg/findRestaurant';
import { format } from 'url';
// const app = express();


// const express = require('express');
const router = express.Router();
router.use(`/findXYZ`, findXYZ);
router.use(`/findRestaurant`, findRestaurant);

export default router;