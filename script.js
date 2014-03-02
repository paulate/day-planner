// thanks diveintohtml5.info
var notepad = document.getElementById("notepad");
var schedule = document.getElementById("schedule");
console.log(schedule.innerHTML);
var note;
window.onkeyup = save;

function supportsLocalStorage() {
    return ('localStorage' in window) && window['localStorage'] !== null;
}

function save() {
    if (!supportsLocalStorage()) { return false; }
		note = notepad.value;
		console.log(note);
		localStorage["stored.note"] =  note;
    return true;
}

function resume() {
    if (!supportsLocalStorage()) { return false; }
		note = localStorage["stored.note"];
		if (!note) { return false; }
		notepad.value = note;
		return true;
}

function displayTimeList() {
	var times ='';
	for (i = 7; i<=9;i++){
		times += '<li>0'+parseInt(i)+':00</li>';
		times += '<li>0'+parseInt(i)+':30</li>';
		
	}
	for (i = 10; i<=24;i++){
		times += '<li>'+parseInt(i)+':00</li>';
		times += '<li>'+parseInt(i)+':30</li>';
		
	}
	var timeTable = '<ul>'+times+'</ul';
	return timeTable
	
}
function init(){
	
	schedule.innerHTML = displayTimeList();

    if (!resume()) {
    }
}

init();