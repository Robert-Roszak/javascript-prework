function printMessage(msg, elemId){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById(elemId).appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('results').innerHTML = '';
}

function showBtn() {
	document.getElementById('reset').style.display = "inline-block";
 }