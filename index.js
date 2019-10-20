import express from 'express';
import scgController from './src/routers/SCGController';

const cors = require('cors');
const app = express();
const port = 3030

app.use(cors());  
app.use(`/`, scgController); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
