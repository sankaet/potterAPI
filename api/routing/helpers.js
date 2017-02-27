const mongoose = require('mongoose');
const connection = require('../db/connection.js');
const Creature = require('../db/creatureModel.js');
const Character = require('../db/characterModel.js');
const Location = require('../db/locationModel.js');
const Obj = require('../db/objectModel.js');
const Spell = require('../db/spellModel.js');

// build helper where input is the id and then you can access it via req.query

module.exports = {
  getAllCreatures: (req, res, next) => {
    new Promise(function(){
      // DB query goes here
      Creature.find((err, creatures) => {
        res.send(creatures[4]);
      });
    })
    .then(() => {
      // check if should throw error if no results
      if(res.length === 0){
        //throw error
        console.log('NO RESULTS FOUND');
      }
    })
    .catch(next);
  },

  getAllCharacters: (req, res, next) => {
    new Promise(function(){
      Character.find((err, characters) => {
        res.send(characters);
      })
    })
    .then(() => {
      if(res.length === 0){
        console.log('NO RESULTS FOUND');
      }
    })
    .catch(next);
  },

  getAllLocations: (req, res, next) => {
    new Promise(function(){
      Location.find((err, locations) => {
        res.send(locations);
      });
    })
    .then(() => {
      if(res.length === 0){
        console.log('NO RESULTS FOUND');
      }
    })
    .catch(next);
  },

  getAllObjects: (req, res, next) => {
    new Promise(function(){
      Obj.find((err, objects) => {
        res.send(objects);
      });
    })
    .then(() => {
      if(res.length === 0){
        console.log('NO RESULTS FOUND');
      }
    })
    .catch(next);
  },

  getAllSpells: (req, res, next) => {
    new Promise(function(){
      Spell.find((err, spells) => {
        res.send(spells);
      });
    })
    .then(() => {
      if(res.length === 0){
        console.log('NO RESULTS FOUND');
      }
    })
    .catch(next);
  },

  throwError: (req, res) => {
    res.status(404).send({
      message: "Data not found"
    })
  }
}
