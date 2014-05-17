var rooms = {};
var users = {};
var joinRoom = function(skt, rm){
  skt.join(rm);
  rooms[rm] = rooms[rm] || [];
  rooms[rm].push(skt.id);
  var obj = {
    name: users[skt.id],
    room: rm 
  };
  skt.emit('joinedRoom', obj);
  skt.broadcast.to(rm).emit('message', {text: obj.name + ' has joined the room'});
}
var getRoom = function(skt){
  var howManyRooms = Object.keys(rooms).length;
  var lastRoomNumber = howManyRooms ? howManyRooms - 1 : 0; 
  var lastRoomArray = howManyRooms ? rooms[lastRoomNumber] : [];
  if(lastRoomArray.length <= 1){
    joinRoom(skt, lastRoomNumber);
  } else {
    joinRoom(skt, lastRoomNumber + 1)
  }
}

module.exports.initUser = function(socket, name){
  users[socket.id] = name;
  getRoom(socket);
}
