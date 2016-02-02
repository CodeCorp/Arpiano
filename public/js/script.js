$(document).keypress(function(key) {
    keyNo = key.which -48;
    if (keyNo>0 && keyNo<8){
    	pressKey(keyNo);
    };
});

var socket = io.connect();

function pressKey(keyNo) {
	if (keyNo>0 && keyNo <8) {
		$('#key-status p').html("Key Pressed : "+keyNo);
		$('#key-'+keyNo).addClass('select_key');
		$('#music-notes img').prop('src','resources/images/music-playing.gif')
		var sound = new Howl({
	 	urls: ['resources/sounds/sound-'+keyNo+'.wav'],
	  	autoplay: true,
	  	loop: false,
	  	volume: 1,
	  	onend: function() {
	    		$('#key-'+keyNo).removeClass('select_key');
	    		$('#music-notes img').prop('src','resources/images/music-not-playing.gif')
 	 		}
		});
	};
	
}

socket.on('connected', function(){
	$('#socket-status p').html("Socket Connected");
});
socket.on('disconnect', function(){
	$('#socket-status p').html("Socket Disonnected");
});
socket.on('data', function (data) {
	
	// console.log(data)
	pressKey(data);
});

