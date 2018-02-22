
var commCounter = -1;
var topicIndex = 0;

var comittees = [];
comittees.push({ imageURL: "img/sc.png", name: "UNSC (Tutorial)" ,offset: "4.2%", topics: ["NK Tensions"],
	nations: ["France","Ethiopia","UK","USA","Bolivia","Cote d'Ivoire","Sweden","China","Kuwait","Poland","Russia","Kazakhstan","North Korea","Equatorial Guinea","Netherlands","Peru"]
});
comittees.push({ imageURL: "img/sc.png", name: "UNSC (Int/Adv)" ,offset: "4.2%", topics: ["Funding Terrorism","NK Tensions"],
	nations: ["Russia","Ethiopia","Equatorial Guinea","Cote D\'Ivoire","Qatar","Israel","Iraq","Afghanistan","France","Kuwait","Jordan","USA","Poland","Bolivia","Saudi Arabia","Syria","Germany","China","North Korea","Peru","Kazakhstan","UAE","Iran","Pakistan","Netherlands","UK","Egypt","Lebanon","Sweden","Turkey","South Korea"]
});
comittees.push({ imageURL: "img/specpol.png", name: "SPECPOL (Novice)" ,offset: "4.2%", topics: ["Palestine","Kurdistan"],
	nations: ["Iraq","Kurdistan","Turkey","France","Iran","Azerbaijian","Armenia","Saudi Arabia","Israel","Syria","Spain","Palestine","Serbia","Russia","Kosovo","China","UK","Catelonia","USA","Belgium"]
});
comittees.push({ imageURL: "img/specpol.png", name: "SPECPOL (Int)" ,offset: "4.2%", topics: ["Kurdistan","Catalonia","Palestine"],
	nations: ["China","Israel","Catelonia","Syria","Kosovo","UK","Saudi Arabia","Spain","Belgium","Serbia","Armenia","Palestine","Iraq","France","USA","Turkey","Kurdistan","Russia","Iran","Canada","Ukraine","Azerbajian","Jordan"]
});
comittees.push({ imageURL: "img/unhcr.png", name: "UNHCR (Novice)" ,offset: "4.2%", topics: ["Europe Migration","Rohingya"],
	nations: ["Iraq","UK","Lebanon","Thailand","Nigeria","Sweden","USA","Bangladesh","Myanmar","Jordan","Royinga Rep","Lebanon","Germany","Malaysia","Libya","France","Syria","Greece","Italy","Turkey","Indonesia"]
});
comittees.push({ imageURL: "img/unhcr.png", name: "UNHCR (Int)" ,offset: "4.2%", topics: ["Europe Migration","Rohingya","Refugee Integration"],
	nations: ["Germany","Jordan","Libya","Malaysia","Sweden","Rohingya Rep.","Nigeria","India","Iraq","Indonesia","Afghanistan","Canada","Syria","France","Hungary","Spain","China","Bangladesh","Egypt","USA","Turkey","Russia","Italy","Greece","Myanmar","UK","Israel","Saudi Arabia","Lebanon","Thailand","Netherlands","Switzerland","Croatia","Morocco"]
});
comittees.push({ imageURL: "img/wfp.png", name: "WFP (Tutorial)" ,offset: "4.2%", topics: ["Yemen Food Insecurity"],
	nations: ["Yemen","Saudi Arabia","Qatar","Israel","Egypt","Russia","Houthi Rebels","United Arab Emirates","Iran","Oman","Somalia","Jordan","UK","Kuwait","Eritrea","USA","Djibouti","Bahrain"]
});
comittees.push({ imageURL: "img/fifa.png", name: "FIFA (Nov/Int)" ,offset: "4.2%", topics: ["Fee Caps","Alleged Corruption"],
	nations: ["Russia","Portugal","Colombia","Brazil","Nigeria","Egypt","Sweden","Iceland","Belgium","Spain","Mexico","Uruguay","England","Iran","France","South Korea","Germany","Croatia","Argentina","Qatar","Costa Rica","Switzerland","Poland","Panama"]
});
comittees.push({ imageURL: "img/au.png", name: "African Union (Int)" ,offset: "4.2%", topics: ["Child Soldiers","South Sudan"],
	nations: ["South Sudan","Nigeria","Somalia","Ghana","South Africa","Rwanda","Libya","Burkina Faso","Ethiopia","Mali","Uganda","Mauritania","Cameroon","Sudan","Chad","Sierra Leone","Niger","Egypt","Eritrea","Burundi","DR of Congo","Benin","Liberia","Central African Republic","Guinea","Senegal","Kenya","Togo","Angola"]
});
comittees.push({ imageURL: "img/hp.png", name: "Harry Potter" ,offset: "4.2%", topics: ["Minorities","Concealment of Magic"],
	nations: ["Harry Potter","Professor Snape","Ron Weasley","Professor Umbridge","Molly Weasley","DRCMC","Minister of Magic","Professor McGonagall","Dumbledore","Kreacher","Hermione Granger","Goblin Liaison Office","Werewolves (Representative)","Hagrid","Department of Mysteries"]
});

function setup(){
	commCounter++;
	if(commCounter==comittees.length){commCounter = 0;} 
	topicIndex = 0;
	changeTopic();

	var myElements = document.querySelectorAll(".topic");
	for (var i = 0; i < myElements.length; i++) {
    	myElements[i].style.top = comittees[commCounter].offset;
	}

	comittees[commCounter].nations.sort();
	for (var i = 0; i<comittees[commCounter].nations.length;i++){
		document.getElementById("test"+(i+1)).innerHTML = comittees[commCounter].nations[i];
	}
	document.getElementById("commTitle").innerHTML = comittees[commCounter].name;
	document.getElementById("logo").src = comittees[commCounter].imageURL;

}


var caucusCount = 1;
function changeCaucus(){
	var caucuses = ["Speakers List","Moderated Caucus","Unmoderated"];
	document.getElementById("caucus").innerHTML = caucuses[caucusCount];
	
	caucusCount++;
	if(caucusCount == 3){
		caucusCount = 0;
	}

}

function changeTopic(){
	document.getElementById("commTopic").innerHTML = comittees[commCounter].topics[topicIndex];
	topicIndex++;
	if(topicIndex == comittees[commCounter].topics.length){topicIndex = 0;}

}

var speakingTime = 30;
var element = "";
function select(elemid){
	$(".member").css("background", "rgba(54, 25, 25, 0)");
    $(elemid).css("background-color", "blue");
	element = $(elemid);
}





function changeSpeakingTime(){
	var myTime = prompt("Speaking Time:", speakingTime);
	speakingTime = myTime;
}

function buttonSelect(){

	$("#speakerslist").append(element);
	$(".member").css("background", "rgba(54, 25, 25, 0)");
}
function buttonRemove(){
	$("#commiteelist").append(element);
	$(".member").css("background", "rgba(54, 25, 25, 0)");
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


var full = false;

function fullscreen(){
		var i = document.body;
		var element = document.getElementById("textbox");
		// go full-screen
		if(!full){
			if (i.requestFullscreen) {
				i.requestFullscreen();
			} else if (i.webkitRequestFullscreen) {
				i.webkitRequestFullScreen();
			} else if (i.mozRequestFullScreen) {
				i.mozRequestFullScreen();
			} else if (i.msRequestFullscreen) {
				i.msRequestFullscreen();
			}
			full = true;
		} else {

			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			}	 else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
			full = false;	
		}
		document.body.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
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
