import socketio from 'socket.io-client';

/**
 * Trocar o ip dentro de socketio pelo ip apresentado no expo
 */
const socket = socketio('http://10.0.0.110:3333/', {
  autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = { latitude, longitude, techs };
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs,
};
