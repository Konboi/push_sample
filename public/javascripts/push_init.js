(function(win, doc) {
  'use strict';

  var socketApp = win.socketApp || (win.socketApp = {});
  socketApp.socket = init();

  function init() {
    var socket = io.connect(socketurl);
 
    socket.on('connect', function() {

    }); 

    return socket;
  }

}(window, document));
