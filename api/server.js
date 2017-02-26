const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express();

//TODO:
  // import each new schema and then set up routes for each

app.use(express.static(path.join(__dirname, '../client')));

mongoose.connect('mongodb://localhost/potterdata/');

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

const Character = mongoose.model('Character', CharacterSchema);

const CreatureSchema = new Schema({
  name: String,
  description: String,
  breed: String,
  appearance: String,
  magicAbilities: String,
  dangers: String,
  typicalHabitats: String,
  allegiance: String,
  collections: Array,
  resource: String
});

const Creature = mongoose.model('Creature', CreatureSchema);

app.get('/characters', (req, res) => {
  mongoose.model('Character').find((err, characters) => {
    // Sends an array of characters in DB
    res.send(characters[0]);
  });
});

app.get('/creatures', (req, res) => {
  mongoose.model('Creature').find((err, creatures) => {
    res.send(creatures[1]);
  });
});

const server = app.listen(process.env.PORT || 3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('potterAPI listening on...', host, port);
});

module.exports = server;
