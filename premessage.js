{
	let loadMessages = Object.create(null);

	let messages = null;

	

	function getMessages () {
		let requestMess = new XMLHttpRequest();
		requestMess.addEventListener("load", setMessages);
		requestMess.open("GET", "preload.json");
		requestMess.send();
	}

	function setMessages () {
		messages = JSON.parse(event.target.responseText).preloaded_messages;
		displayMessages(messages)
	}

	function displayMessages (message) {
		// console.log("message", messages);
		messages.forEach(function(message) {
			let messOutput = document.getElementById('msg-output');
			messOutput.innerHTML += `${message.message}<br>`;
			})
	}

	window.Chatty = window.Chatty || {};
	Chatty.LoadMessages = loadMessages;
}
getMessages();
