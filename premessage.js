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
		messages = JSON.parse(event.target.responseText).messages;
	}

	window.Chatty = window.Chatty || {};
	Chatty.LoadMessages = loadMessages;
}
