const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
users = [];
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('setUsername', (data) => {
    if (users.indexOf(data) === -1) {
      users.push(data);
      socket.emit('userSet', { username: data });
    } else {
      socket.emit('userExists', data + ' username taken, try some other name');
    }
  });
  socket.on('msg', function(data) {
    //Send message to everyone
    io.sockets.emit('newmsg', data);
  });
});

http.listen(3000, () => {
  console.log('server is runnning at 3000');
});
