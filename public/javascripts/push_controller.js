(function(win, doc) {
  'use strict';

  var socketApp = win.socketApp || (win.socketApp = {});
  doc.getElementById('send').addEventListener('click', function() {
      var number = doc.getElementById('tableNumber').value;
    socketApp.socket.emit('push send', {msg: 'push!!', type: number }); 
  }, false);

  doc.getElementById('delete').addEventListener('click', function() {
      var number = doc.getElementById('deleteTableNumber').value;
      socketApp.socket.emit('push delete', {msg: 'push!!', type: number });
  }, false);

}(window, document));
