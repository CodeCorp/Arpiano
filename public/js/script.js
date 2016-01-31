var socket = io.connect();
var dialogue = document.getElementById('dialogue');
var box = document.getElementById('angle');

function pressKey(keyNo) {
	if (keyNo>0 && keyNo <8) {
		
		$('#key-'+keyNo).addClass('select_key');
		var sound = new Howl({
	 	urls: ['resources/sounds/sound-'+keyNo+'.wav'],
	  	autoplay: true,
	  	loop: false,
	  	volume: 1,
	  	onend: function() {
	    		$('#key-'+keyNo).removeClass('select_key');
 	 		}
		});
	};
	
}

socket.on('connected', function(){
	dialogue.innerHTML = "Socket Connected";
});
socket.on('disconnect', function(){
	dialogue.innerHTML = "Socket Disconnected";
});
socket.on('data', function (data) {
	box.innerHTML = data;
	// console.log(data)
	pressKey(data);
});