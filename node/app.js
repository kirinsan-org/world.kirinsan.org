var io = require('socket.io').listen(4040);
io.sockets.on('connection', function(socket) {
	socket.broadcast.emit('connectCount', io.sockets.clients().length);

	socket.on('changeClass', function(cls) {
		socket.broadcast.emit('changeClass', cls);
	});

	socket.on('color', function(color) {
		socket.broadcast.emit('color', color);
	});

	socket.on('playById', function(id) {
		socket.broadcast.emit('playById', id);
	});

	socket.on('playExternal', function(url) {
		socket.broadcast.emit('playExternal', url);
	});
});

io.sockets.on('disconnect', function(socket) {
	socket.broadcast.emit('connectCount', io.sockets.clients().length);
});
