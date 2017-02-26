const helpers = require('./helpers');
const request = require('request');

module.exports.router = (app) => {
  app.get('/creatures', (req, res) => {
    mongoose.model('Creature').find((err, creatures) => {
      res.send(creatures[1]);
    });
  });

  app.get('/characters', (req, res) => {

  });

  app.get('/locations', (req, res) => {

  });

  app.get('/objects', (req, res) => {

  });

  app.get('/spells', (req, res) => {

  });
};
