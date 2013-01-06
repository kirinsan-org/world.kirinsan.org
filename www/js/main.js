var socket = io.connect('http://[server name]:4040/');
socket.on('playById', playById);
$(function() {
	var audiofiles = ['iiyone1', 'iiyone2', 'kara', 'kirinsan1', 'kirinsan2', 'kirinsan3', 'kirinsan4', 'ne1', 'ne2', 'ne3', 'ne4', 'ne5', 'oshimai', 'unvoa1', 'unvoa2', 'unvoa3', 'unvoa4', 'unvoa5', 'yeah1', 'yeah2', 'yeah3', 'yeah4', 'yonju1', 'yonju2', 'yonju3', 'yonju4', 'ze1', 'ze2', 'ze3', 'ze4', 'ze5'];
	$.each(audiofiles, function(idx, file) {
		$('<audio preload="auto">').attr('id', file)
			.append($('<source type="audio/ogg"/>').attr('src', 'audio/' + file + '.ogg'))
			.append($('<source type="audio/mp4"/>').attr('src', 'audio/' + file + '.m4a'))
		.appendTo(document.body);
	});

	$('#drumpad').on('click', 'a', onClickPad);
});

function playById(id) {
	var audio = document.getElementById(id);
	if (audio && audio.play) {
		audio.play();
		return true;
	} else {
		return false;
	}
}

function onClickPad() {
	var sel = $(this).data('selector');
	var audio = $(sel);
	var rnd = Math.floor(Math.random() * audio.length);
	if (audio[rnd] && audio[rnd].play) {
		audio[rnd].play();
		if (socket && socket.emit) {
			socket.emit('playById', audio[rnd].id);
		}
	}
}
