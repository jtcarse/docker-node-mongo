const express = require('express');
const app = express();
const database = require('./database.js');

const db = database.open();

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to mongod...');
});

app.get('/', (req, res) => res.send("hello world!\n"));

app.listen(3000, () => console.log('app listening on port 3000...'));
