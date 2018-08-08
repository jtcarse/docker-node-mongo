const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const docSchema = new Schema({
  id: Number,
  name: String
});

const Doc = mongoose.model('Doc', docSchema);

const doc = new Doc({
  id: 1,
  name: 'Oct'
});

exports.open = () => {
  mongoose.connect('mongodb://mongo:27017', {
    useNewUrlParser: true,
    dbName: 'test'
  });

  return mongoose.connection;
}
