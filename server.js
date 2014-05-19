var express = require('express');
var http = require('http');
var app = express();
var path = require('path')
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, { log: false });
var gameLogic = require('./server-assets/gameLogic');

var port = process.env.PORT || 3000;
server.listen(port);

app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on('connection', function (socket) {
  gameLogic.initUser(socket, 'Tyler');

  socket.on('userChangedEditor', function(newText){
    gameLogic.sendTextUpdate(socket, newText);
  });

  socket.on('disconnect', function(){
    gameLogic.leaveRoom(socket);
  })
});