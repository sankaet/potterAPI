const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  Full Name: String
Birthday: String
Wand: String
House: String
Patronus: String
Parents: String
Skills: Array
Hobbies: Array
Death: String
});

mongoose.connect('mongodb://localhost/3000');

