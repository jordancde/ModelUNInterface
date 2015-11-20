var speakingTime = 30;
var element = "";
function select(elemid){
	$(".member").css("background-color", "white");
    $(elemid).css("background-color", "blue");
	element = $(elemid);
}

function changeSpeakingTime(){
	var myTime = prompt("Speaking Time:", speakingTime);
	speakingTime = myTime;
}

function buttonSelect(){

	$("#speakerslist").append(element);
	$(".member").css("background-color", "white");
}
function buttonRemove(){
	$("#commiteelist").append(element);
	$(".member").css("background-color", "white");
}

function speak(){
	reset();
	start();
	checkTime();
}

function checkTime(){
	var timerId = setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      var mySeconds = Math.floor(x.time() / 1000 );                     //  increment the counter
      if (mySeconds<speakingTime) {            //  if the counter < 10, call the loop function
         checkTime();             //  ..  again which will trigger another 
      }else{
      	stop();
      	alert("Times Up");  
      	reset(); 
      	clearInterval(timerId); 
      }              //  ..  setTimeout()
   	}, 200)

}

var	clsStopwatch = function() {
		var	startAt	= 0;	
		var	lapTime	= 0;	
		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
		this.start = function() {
				startAt	= startAt ? startAt : now();
			};
		this.stop = function() {
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0;
			};
		this.reset = function() {
				lapTime = startAt = 0;
			};
		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};

var x = new clsStopwatch();
var $time;
var clocktimer;

function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

function formatTime(time) {
	var h = m = s = ms = 0;
	var newTime = '';

	h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	ms = time % 1000;

	newTime = pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
	return newTime;
}

function show() {
	$time = document.getElementById('time');
	update();
}

function update() {
	$time.innerHTML = formatTime(x.time());
}

function start() {
	clocktimer = setInterval("update()", 1);
	x.start();
}

function stop() {
	x.stop();
	clearInterval(clocktimer);
}

function reset() {
	stop();
	x.reset();
	update();
}