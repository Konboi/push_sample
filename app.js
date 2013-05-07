
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , app = express()
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/receiver', routes.receiver);
app.get('/users', user.list);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

io.set('log level', 2);
io.sockets.on('connection', function (socket) {
    console.log('connect');

    socket.on('push send', function (data) {
        socket.broadcast.emit('push receive', data);
    });

    socket.on('push delete', function (data) {
        socket.broadcast.emit('push delete', data);
    });

    socket.on('disconnect', function() {
        console.log('disconnected');
    });
});

