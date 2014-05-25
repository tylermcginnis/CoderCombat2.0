var rooms = {};
var users = {};

var getRandomInt = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var joinRoom = function(skt, io, rm){
  skt.join(rm);
  rooms[rm] = rooms[rm] || [];
  rooms[rm].push(skt.id);
  users[skt.id].room = rm;
  users[skt.id].socket = skt;
  if(rooms[rm].length > 1){
    skt.broadcast.to(rm).emit('joinedRoom', {text: users[skt.id].name + ' joined room ' + users[skt.id].room});
    io.sockets.in(rm).emit('initializeQuestion', getRandomInt(0, 2));
    //maybe a 3,2,1 Go! modal here.
  } else {
    //maybe emit/launch waiting for opponent event/modal
  }
};

var placeInRoom = function(skt, io){
  var keys = Object.keys(rooms);
  var howManyRooms = keys.length;
  var lastRoomNumber = howManyRooms ? parseInt(keys[keys.length - 1], 10) : 0; 
  var lastRoomArray = howManyRooms ? rooms[lastRoomNumber] : [];
  if(lastRoomArray.length <= 1){
    joinRoom(skt, io, lastRoomNumber);
  } else {
    joinRoom(skt, io, lastRoomNumber + 1)
  }
};

module.exports.initUser = function(socket, io, name){
  users[socket.id] = {};
  users[socket.id].name = name;
  placeInRoom(socket, io);
};

module.exports.leaveRoom = function(skt){
  var room = users[skt.id].room;
  var userName = users[skt.id].name;
  delete users[skt.id];
  var usersRoomIndex = rooms[room].indexOf(skt.id);
  rooms[room].splice(usersRoomIndex, 1);
  if(!rooms[room].length){
    delete rooms[room];
  } else {
    var opponentId = rooms[room][0];
    var opponentSocket = users[opponentId].socket;
    skt.broadcast.to(room).emit('leftRoom', {text: userName + ' left room '+ room});
    skt.leave(room);
    delete rooms[room];
    placeInRoom(opponentSocket);
  }
};

module.exports.sendTextUpdate = function(skt, newText){
  var room = users[skt.id].room;
  skt.broadcast.to(room).emit('updateText', newText);
}
