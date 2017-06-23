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
<<<<<<< HEAD
			combinedArray = Chatty.DOMInteraction.combineAllMessages(userArr, jsonArr)
=======
			let combinedArray = Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr)
>>>>>>> 437d0edda7218f2f8c6778b6a066f9cd17006b3a
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
		console.log("clear array?", combinedArray);
	});

window.addEventListener("click", function() {
	if (event.target.classList.contains("delete-btn")) {
		let parentID = event.target.parentNode.getAttribute("id");
		combinedArray = Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr);
		Chatty.DeleteMess.removeMessage(parentID);
		combinedArray = Chatty.DeleteMess.removeFromArray(combinedArray, parentID);
	}
});