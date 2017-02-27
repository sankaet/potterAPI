const mongoose = require('mongoose');
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

module.exports = Creature;
