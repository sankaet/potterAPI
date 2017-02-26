const fs = require('fs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/potterdata/');
const db = mongoose.connection;
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

const Character = mongoose.model('Character', CharacterSchema);

// Reads all Character JSON files and allows access to each character object
fs.readdir('../../data/characters', (err, characters) => {
  for(var i = 1; i < characters.length; i++){
    fs.readFile(`../../data/characters/${characters[i]}`, (err, data) => {
      if(err){
        console.error(err);
      }
      const character = new Character(JSON.parse(data.toString()));
      character.save((err, data) => {
        if(err){
          console.error(err);
        }
        console.log('Saved: ', data);
      })
    });
  }
});


