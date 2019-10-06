const moongoose = require('mongoose');

const bookModel = new moongoose.Schema({
  title: { type: String },
  author: { type: String },
  genre: { type: String },
  read: { type: Boolean, default: false }
});

module.exports = moongoose.model('Book', bookModel);
