const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost/potterdata/');

mongoose.connection.once('connected', () => {
  console.log('Connected to potterdata');
});

module.exports = connect;
