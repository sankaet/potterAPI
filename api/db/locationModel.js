const mongoose = require('mongoose');
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
module.exports = Location;
