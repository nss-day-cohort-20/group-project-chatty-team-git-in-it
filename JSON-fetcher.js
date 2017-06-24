{
	let loadMessages = Object.create(null);
	let messages = [];

// retrieves messages from JSON file
	loadMessages.retrieveMessages = function (assignIdFunc, jsonToArrayFunc) {
		let requestMess = new XMLHttpRequest();
		requestMess.open("GET", "preload.json");
		requestMess.send();
		requestMess.addEventListener("load", function () {
			setMessages(assignIdFunc);
			jsonToArrayFunc(messages);
		});
	} //
// parses JSON messages into an array of objects, each with one key-value pair
	function setMessages (cb) {
		messagesObjs = JSON.parse(event.target.responseText).preloaded_messages;
		arrayUpMessages(messagesObjs);
		cb(messages);
	}

 // takes array of objects and returns an array of strings, the 'messages'
	function arrayUpMessages (aBigMess) {
		aBigMess.forEach(function(smallMess) {
			messages.push(smallMess.message);
		})
	}

	window.Chatty = window.Chatty || {};
	Chatty.LoadMessages = loadMessages;
}