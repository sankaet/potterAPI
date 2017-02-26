const fs = require('fs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/potterdata/');
const db = mongoose.connection;
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: String,
  description: String,
  whereInTheWorld: String,
  residentsOrOwners: String,
  magicalProperties: String,
  significantEventsThatTookPlaceHere: String,
  peculiarThingsThatLiveHere: String,
  collections: Array,
  resource: String
});

const Location = mongoose.model('location', LocationSchema);

// Reads all Character JSON files and allows access to each location object
fs.readdir('../../data/locations', (err, locations) => {
  for(var i = 1; i < locations.length; i++){
    fs.readFile(`../../data/locations/${locations[i]}`, (err, data) => {
      if(err){
        console.error(err);
      }
      const location = new Location(JSON.parse(data.toString()));
      location.save((err, data) => {
        if(err){
          console.error(err);
        }
        console.log('Saved: ', data);
      })
    });
  }
});


