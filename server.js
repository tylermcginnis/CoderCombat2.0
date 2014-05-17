var express = require('express');
var http = require('http');
var app = express();
var path = require('path')
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, { log: false });
var user = require('./assets/user');
var gameLogic = require('./assets/gameLogic');

var port = process.env.PORT || 3000;
server.listen(port);

// require('./server_config/routes.js')(app);

app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on('connection', function (socket) {
  gameLogic.initUser(socket, 'Tyler');
  console.log('Socket Connected');
});