{
	let newChattyObj = Object.create(null);
	let deleteButton = document.getElementsByClassName("delete-btn");

	// One IIFE should accept a message element id and then remove the correct element from the DOM.
	// This IIFE should also remove the corresponding message from the private array that was created
	// in the previous IIFE.
	newChattyObj.removeMessage = function(id) {
		let currentElement = document.getElementById(id);
		currentElement.parentNode.remove();
	}

	newChattyObj.removeFromArray = function(msgArray, id) {
		messagesArray.splice(id);
	}

	// deleteButton.addEventListener("click",
	// 	newChattyObj.removeMessage;
	// 	newChattyObj.removeFromArray;
	// })

	window.Chatty = window.Chatty || {};
	Chatty.RemoveMessage = newChattyObj;

}