const mongoose = require('mongoose');
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
module.exports = Spell;
