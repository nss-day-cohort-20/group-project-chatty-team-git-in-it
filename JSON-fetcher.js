{
	let loadMessages = Object.create(null);

	let messages = [];

//retrieves messages from JSON file
	loadMessages.retrieveMessages = function (cb) {
		let requestMess = new XMLHttpRequest();
		requestMess.addEventListener("load", function () {
			setMessages(cb);
		});
		requestMess.open("GET", "preload.json");
		requestMess.send();
	}
//parses JSON messages into an array of objects (each with one key-value pair)
	function setMessages (cb) {
		messagesObjs = JSON.parse(event.target.responseText).preloaded_messages;
		arrayUpMessages(messagesObjs);
		cb(messages);
	}

 //goes through that array of objects and returns an array of just strings, the 'message' values from that object
	function arrayUpMessages (abigmess) {
		abigmess.forEach(function(smallMess) {
				messages.push(smallMess.message);
			})
	}

//I need to write a function that will return the array for access in MAIN JS
	loadMessages.getMessages = function() {
		return messages;
	}

  window.Chatty = window.Chatty || {};
	Chatty.LoadMessages = loadMessages;
}