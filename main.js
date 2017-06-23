Chatty.LoadMessages.retrieveMessages(Chatty.DOMInteraction.putJsonMsgInDom);

let inputBox = document.getElementById('msg-input');
let jsonArr = Chatty.LoadMessages.getMessages();
let userArr = Chatty.DOMInteraction.getUserMessages();

inputBox.addEventListener('keyup', function() {
		if (event.key === 'Enter') {
			Chatty.DOMInteraction.addToArray();
			let bigArray = Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr);
			Chatty.DOMInteraction.assignIds(bigArray);
			// Chatty.DOMInteraction.putUserMsgInDom("id", inputBox.value);
			inputBox.value = '';
			combinedArray = Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr)
			console.log("whole array?", combinedArray);
			Chatty.DeleteMess.disableBtn();
		}
	});

clear.addEventListener("click", function() {
		Chatty.DeleteMess.clearArr(combinedArray);
		Chatty.DeleteMess.clearElement();
		Chatty.DeleteMess.disableBtn();
	});