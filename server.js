var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
   res.sendFile('public/index.html', { root: __dirname })
})

// Handle a new connection
io.on('connection', function(socket) {

    // When someone sends a message, send it out to everyone
    socket.on('circle move', function(msg) {
        io.emit('circle move', msg);
    });

});

http.listen(3000, function() {
    console.log('Listening on port 3000');
});
