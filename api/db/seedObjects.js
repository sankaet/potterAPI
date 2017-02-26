const fs = require('fs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/potterdata/');
const db = mongoose.connection;
const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
  name: String,
  description: String,
  type: String,
  magicalProperties: String,
  purpose: String,
  whereItIsLikelyToBeFound: String,
  whoMadeOrFirstOwnedIt: String,
  collections: Array,
  whenItWasMade: String,
  resource: String
});

const Object = mongoose.model('object', ObjectSchema);

// Reads all Character JSON files and allows access to each object object
fs.readdir('../../data/objects', (err, objects) => {
  for(var i = 1; i < objects.length; i++){
    fs.readFile(`../../data/objects/${objects[i]}`, (err, data) => {
      if(err){
        console.error(err);
      }
      const object = new Object(JSON.parse(data.toString()));
      object.save((err, data) => {
        if(err){
          console.error(err);
        }
        console.log('Saved: ', data);
      })
    });
  }
});


