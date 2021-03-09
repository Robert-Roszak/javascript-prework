
	const printMessage = function (msg, elemId){
		const div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById(elemId).appendChild(div);
	}

	const clearMessages = function (){
		document.getElementById('messages').innerHTML = '';
		document.getElementById('results').innerHTML = '';
	}

	const showBtn = function () {
		document.getElementById('reset').style.display = "inline-block";
	}