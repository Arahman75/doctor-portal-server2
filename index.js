const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

//middle wire
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello doctor portal2!')
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})