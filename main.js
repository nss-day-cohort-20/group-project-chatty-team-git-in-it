Chatty.LoadMessages.retrieveMessages(Chatty.DOMInteraction.assignIds, Chatty.DOMInteraction.pushJsonToCurrentArray);
// Chatty.DOMInteraction.pushJsonToCurrentArray(Chatty.LoadMessages.getMessages());

let inputBox = document.getElementById('msg-input');
// let jsonArr = Chatty.LoadMessages.getMessages();
// let userArr = Chatty.DOMInteraction.getUserMessages();
// console.log(userArr);
// window.addEventListener("load", function() {

// });


inputBox.addEventListener('keypress', function() {
		if (event.key === 'Enter') {
			Chatty.DeleteMess.clearElement();
			Chatty.DOMInteraction.addToArray();
			Chatty.DOMInteraction.assignIds(Chatty.DOMInteraction.getUserMessages());
			// let combinedArray = Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr)
			// let bigArray = Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr);

			// Chatty.DOMInteraction.assignIds(combinedArray);//(bigArray);
			// Chatty.DOMInteraction.putUserMsgInDom("id", inputBox.value);
			inputBox.value = '';
			// console.log("whole array?", combinedArray);
			Chatty.DeleteMess.disableBtn();
		}
	});

clear.addEventListener("click", function() {
		Chatty.DeleteMess.clearArr(Chatty.DOMInteraction.getUserMessages())
		// Chatty.DeleteMess.clearArr(Chatty.DOMInteraction.combineAllMessages(), userArr, jsonArr);
		Chatty.DeleteMess.clearElement();
		Chatty.DeleteMess.disableBtn();
	});

		// console.log("clear array?", Chatty.DOMInteraction.combineAllMessages());


window.addEventListener("click", function() {
	if (event.target.classList.contains("delete-btn")) {
		let parentID = event.target.parentNode.getAttribute("id");
		console.log("ID of thing we want deleted", parentID);
		// let combinedArray = Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr);
		Chatty.DeleteMess.removeMessage(parentID);
		console.log(Chatty.DOMInteraction.getUserMessages());
		Chatty.DeleteMess.removeFromArray(Chatty.DOMInteraction.getUserMessages(), parentID);
		Chatty.DeleteMess.clearElement();
		Chatty.DOMInteraction.assignIds(Chatty.DOMInteraction.getUserMessages())
	}
});
