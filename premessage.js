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
	}

	window.Chatty = window.Chatty || {};
	Chatty.LoadMessages = loadMessages;
}