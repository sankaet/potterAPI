const mongoose = require('mongoose');
const connection = require('../db/connection.js');
const Creature = require('../db/creatureModel.js');
const Character = require('../db/characterModel.js');
const Location = require('../db/locationModel.js');
const Obj = require('../db/objectModel.js');
const Spell = require('../db/spellModel.js');


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
      // db call
      Character.find((err, characters) => {
        res.send(characters);
      })
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

  getAllLocations: (req, res, next) => {
    new Promise(function(){
      // DB query goes here
      Location.find((err, locations) => {
        res.send(locations);
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

  getAllObjects: (req, res, next) => {
    new Promise(function(){
      // DB query goes here
      Obj.find((err, objects) => {
        res.send(objects);
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

  getAllSpells: (req, res, next) => {
    new Promise(function(){
      // DB query goes here
      Spell.find((err, spells) => {
        res.send(spells);
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

  throwError: (req, res) => {
    res.status(404).send({
      message: "Data not found"
    })
  }

}
