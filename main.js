Chatty.LoadMessages.retrieveMessages(Chatty.DOMInteraction.putJsonMsgInDom);

let inputBox = document.getElementById('msg-input');
let jsonArr = Chatty.LoadMessages.getMessages();
let userArr = Chatty.DOMInteraction.getUserMessages();

inputBox.addEventListener('keyup', function() {
		if (event.key === 'Enter') {
			Chatty.DOMInteraction.addToArray();
			Chatty.DOMInteraction.putUserMsgInDom("id", inputBox.value);
			inputBox.value = '';
			console.log("whole array?", Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr));
		}
	});