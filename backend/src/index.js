const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  'mongodb://localhost:27017/omnistack10', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
