const fs = require('fs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/potterdata/');
const db = mongoose.connection;
const Schema = mongoose.Schema;

const SpellSchema = new Schema({
  name: String,
  description: String,
  incantation: String,
  purpose: String,
  collections: Array,
  resource: String
});

const Spell = mongoose.model('spell', SpellSchema);

// Reads all Character JSON files and allows access to each spell
fs.readdir('../../data/spells', (err, spells) => {
  for(var i = 1; i < spells.length; i++){
    fs.readFile(`../../data/spells/${spells[i]}`, (err, data) => {
      if(err){
        console.error(err);
      }
      const spell = new Spell(JSON.parse(data.toString()));
      spell.save((err, data) => {
        if(err){
          console.error(err);
        }
        console.log('Saved: ', data);
      })
    });
  }
});


