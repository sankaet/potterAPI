const mongoose = require('mongoose');
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

const Obj = mongoose.model('object', ObjectSchema);
module.exports = Obj;
