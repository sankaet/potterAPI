const fs = require('fs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/potterdata/');
const db = mongoose.connection;
const Schema = mongoose.Schema;

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

// Reads all Character JSON files and allows access to each creature object
fs.readdir('../../data/creatures', (err, creatures) => {
  for(var i = 1; i < creatures.length; i++){
    fs.readFile(`../../data/creatures/${creatures[i]}`, (err, data) => {
      if(err){
        console.error(err);
      }
      const creature = new Creature(JSON.parse(data.toString()));
      creature.save((err, data) => {
        if(err){
          console.error(err);
        }
        console.log('Saved: ', data);
      })
    });
  }
});


