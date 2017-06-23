Chatty.LoadMessages.retrieveMessages(Chatty.DOMInteraction.assignIds);

let inputBox = document.getElementById('msg-input');
let jsonArr = Chatty.LoadMessages.getMessages();
let userArr = Chatty.DOMInteraction.getUserMessages();

// window.addEventListener("load", function() {

// });


inputBox.addEventListener('keyup', function() {
		if (event.key === 'Enter') {
			Chatty.DeleteMess.clearElement();
			Chatty.DOMInteraction.addToArray();
			combinedArray = Chatty.DOMInteraction.combineAllMessages(userArr, jsonArr)
			let combinedArray = Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr)
			// let bigArray = Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr);
			Chatty.DOMInteraction.assignIds(combinedArray);//(bigArray);
			// Chatty.DOMInteraction.putUserMsgInDom("id", inputBox.value);
			inputBox.value = '';
			console.log("whole array?", combinedArray);
			Chatty.DeleteMess.disableBtn();
		}
	});

clear.addEventListener("click", function() {
		Chatty.DeleteMess.clearArr(combinedArray, userArr, jsonArr);
		Chatty.DeleteMess.clearElement();
		Chatty.DeleteMess.disableBtn();
	});

		console.log("clear array?", combinedArray);


window.addEventListener("click", function() {
	if (event.target.classList.contains("delete-btn")) {
		let parentID = event.target.parentNode.getAttribute("id");
		combinedArray = Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr);
		Chatty.DeleteMess.removeMessage(parentID);
		combinedArray = Chatty.DeleteMess.removeFromArray(combinedArray, parentID);
	}
});
