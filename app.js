/* eslint-disable no-console */
const express = require('express');
const moongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

moongoose.connect('mongodb://localhost/bookAPI', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', cors(), bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(port, () => {
  console.log(`Running on port  ${port}`);
});
