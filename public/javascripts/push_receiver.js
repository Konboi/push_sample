(function(win, doc) {
  'use strict';

  var socketApp = win.socketApp || (win.socketApp = {});
  socketApp.socket.on('push receive', function(data) {
    alert(data.type + ' : ' + data.msg);
    var div = doc.getElementById('pushList'); 
    var p = doc.createElement('p');
    p.innerHTML = data.type + ' : ' + data.msg;
    div.appendChild(p);
  });

  socketApp.socket.on('push delete', function(data) {
    var div = doc.getElementById('pushList'); 
    div.innerHTML = '';
  });

  }(window, document));
