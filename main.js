Chatty.LoadMessages.retrieveMessages(Chatty.DOMInteraction.assignIds, Chatty.DOMInteraction.pushJsonToCurrentArray);

let inputBox = document.getElementById('msg-input');
let clear = document.getElementById('clear-btn')

inputBox.addEventListener('keypress', function() {
	if (event.key === 'Enter') {
		Chatty.DeleteMess.clearElement();
		Chatty.DOMInteraction.addToArray();
		Chatty.DOMInteraction.assignIds(Chatty.DOMInteraction.getUserMessages());
		inputBox.value = '';
		Chatty.DeleteMess.disableBtn();
	}
});

clear.addEventListener("click", function() {
	Chatty.DeleteMess.clearArr(Chatty.DOMInteraction.getUserMessages())
	Chatty.DeleteMess.clearElement();
	Chatty.DeleteMess.disableBtn();
});

window.addEventListener("click", function() {
	if (event.target.classList.contains("delete-btn")) {
		let parentID = event.target.parentNode.getAttribute("id");
		Chatty.DeleteMess.removeMessage(parentID);
		Chatty.DeleteMess.removeFromArray(Chatty.DOMInteraction.getUserMessages(), parentID);
		Chatty.DeleteMess.clearElement();
		Chatty.DOMInteraction.assignIds(Chatty.DOMInteraction.getUserMessages())
	}
});