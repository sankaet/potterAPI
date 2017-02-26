const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client')));

const server = app.listen(process.env.PORT || 3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('potterAPI listening on...', host, port);
});

module.exports = server;
