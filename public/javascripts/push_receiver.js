(function(win, doc) {
    'use strict';

    var socketApp = win.socketApp || (win.socketApp = {});
    socketApp.socket.on('push receive', function(data) {
        alert(data.type + '番テーブルがお呼び出しです。');
        var div = doc.getElementById('pushList'); 
        var p = doc.createElement('p');
        p.innerHTML = data.type + '番テーブルがお呼び出しです。';
        p.className = data.type;
        div.appendChild(p);

        var chime = doc.getElementById('audio');
        chime.play();
    });

    socketApp.socket.on('push delete', function(data) {
        var parent = doc.getElementById('pushList');
        var removeElement = doc.getElementsByClassName(data.type);
        for(var i = removeElement.length - 1; i >= 0 ; i--) {
            parent.removeChild(removeElement[i]);
        }
    });
}(window, document));
