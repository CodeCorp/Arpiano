var socket = io.connect();

function pressKey(keyNo) {
	if (keyNo>0 && keyNo <8) {
		$('#key-status p').html("Key Pressed : "+keyNo);
		$('#key-'+keyNo).addClass('select_key');
		$('#music-notes').css('visibility','visible');
		var sound = new Howl({
	 	urls: ['resources/sounds/sound-'+keyNo+'.wav'],
	  	autoplay: true,
	  	loop: false,
	  	volume: 1,
	  	onend: function() {
	    		$('#key-'+keyNo).removeClass('select_key');
	    		$('#music-notes').css('visibility','hidden');
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