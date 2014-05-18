var rooms = {};
var users = {};

var joinRoom = function(skt, rm){
  skt.join(rm);
  rooms[rm] = rooms[rm] || [];
  rooms[rm].push(skt.id);
  users[skt.id].room = rm;
  users[skt.id].socket = skt;
  rooms[rm].length > 1 && skt.broadcast.to(rm).emit('joinedRoom', {text: users[skt.id].name + ' joined room ' + users[skt.id].room});
}

var getRoom = function(skt){
  var keys = Object.keys(rooms);
  var howManyRooms = keys.length;
  var lastRoomNumber = howManyRooms ? parseInt(keys[keys.length - 1], 10) : 0; 
  var lastRoomArray = howManyRooms ? rooms[lastRoomNumber] : [];
  if(lastRoomArray.length <= 1){
    joinRoom(skt, lastRoomNumber);
  } else {
    joinRoom(skt, lastRoomNumber + 1)
  }
}

module.exports.initUser = function(socket, name){
  users[socket.id] = {};
  users[socket.id].name = name;
  getRoom(socket);
}

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
    debugger;
    getRoom(opponentSocket);
  }
}
