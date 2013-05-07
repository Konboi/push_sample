(function(win, doc) {
  'use strict';

  var socketApp = win.socketApp || (win.socketApp = {});
  doc.getElementById('send').addEventListener('click', function() {
    socketApp.socket.emit('push send', {msg: 'push!!', type: 1 });  
  }, false);

  doc.getElementById('delete').addEventListener('click', function() {
    socketApp.socket.emit('push delete');  
  }, false);

}(window, document));
