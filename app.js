const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongooseOptions = { useNewUrlParser: true, dbName: 'test' };

const docSchema = new Schema({
  id: Number,
  name: String,
});

const Doc = mongoose.model('Doc', docSchema);

const doc = new Doc({
  id: 1,
  name: 'Octopus'
});

mongoose.connect('mongodb://mongo:27017', mongooseOptions);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to mongod...');
});

app.get('/', (req, res) => res.send("hello world!\n"));

app.listen(3000, () => console.log('app listening on port 3000...'));
