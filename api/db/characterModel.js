const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: String,
  description: String,
  fullName: String,
  birthday: String,
  wand: String,
  house: String,
  patronus: String,
  skills: Array,
  collections: Array,
  hobbies: Array,
  resource: String,
  death: String
});

const Character = mongoose.model('Character', CharacterSchema)

module.exports = Character;
