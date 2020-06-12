const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let clients = 0;
//Whenever someone connects this gets execute
io.on('connection', (socket) => {
  console.log('A user conected...');

  //Send a message after a timeout of 4 seconds
  //   setTimeout(() => {
  //     // socket.send('Sent a message 4 seconds after connection!');
  //     socket.emit('testerEvent', { description: 'A custom event' });
  //   }, 4000);

  clients++;
  //   io.sockets.emit('broadcast', {
  //     description: clients + ' clients connected!',
  //   });
  socket.emit('newclientconnect', { description: 'hey, welcome!!' });
  socket.broadcast.emit('newclientconnect', {
    description: clients + ' clients connected',
  });

  //   socket.on('clientEvent', function(data) {
  //     console.log(data);
  //   });
  //Whenever someone disconnects this piece piece of code execute
  socket.on('disconnect', () => {
    clients--;
    socket.broadcast.emit('newclientconnect', {
      description: clients + 'clients connected!!',
    });
    console.log('A user dissconnected');
  });
});

http.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
