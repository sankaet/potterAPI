const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost/3000');

connect.use()

const Schema = mongoose.Schema;

const characterSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  fullName: String,
  birthday: String,
  wand: String,
  house: String,
  patronus: String,
  parents: String,
  skills: Array,
  hobbies: Array,
  death: String,
  collections: Array,
  resource: String
});

const Character = mongoose.model('Character', characterSchema);


