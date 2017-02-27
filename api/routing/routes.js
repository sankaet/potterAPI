const helpers = require('./helpers');
const request = require('request');

module.exports.router = (app) => {
  app.get('/creatures', helpers.getAllCreatures, helpers.throwError);

  app.get('/characters', helpers.getAllCharacters, helpers.throwError);

  app.get('/locations', helpers.getAllLocations, helpers.throwError);

  app.get('/objects', helpers.getAllObjects, helpers.throwError);

  app.get('/spells', helpers.getAllSpells, helpers.throwError);
};
