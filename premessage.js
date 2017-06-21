{
	let loadMessages = Object.create(null);

	let messages = null;

	loadMessages.getMessages = function () {
		let requestMess = new XMLHttpRequest();
		requestMess.addEventListener("load", setMessages);
		requestMess.open("GET", "preload.json");
		requestMess.send();
	}

	loadMessages.setMessages = function () {
		messages = JSON.parse(event.target.responseText).preloaded_messages;
		messageArray(messages);
	}

	let messageArray = function arrayUpMessages (message) {
		// console.log("message", messages);
			let	msgArray = []
		messages.forEach(function(message) {
			// let messOutput = document.getElementById('msg-output');
			// messOutput.innerHTML += `${message.message}<br>`;
			msgArray.push(message.message);
			})
			console.log("message array?", msgArray);
		return msgArray
	}

	window.Chatty = window.Chatty || {};
	Chatty.LoadMessages = loadMessages;
}