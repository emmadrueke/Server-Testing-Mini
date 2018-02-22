const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

const server = express();
server.use(bodyParser.json());
server.use(morgan('combined'));

server.get('/', (req, res) => {
  res.send('I am Sleepy');
});

server.listen(port, console.log(`server listening on ${port}`));
