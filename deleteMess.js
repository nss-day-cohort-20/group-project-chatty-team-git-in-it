{
	let deleteMess = Object.create(null);
	var clear = document.getElementById("clear-btn");
	let deleteButton = document.getElementsByClassName("delete-btn");
	var output = document.getElementById("msg-output");

	// One IIFE should accept a message element id and then remove the correct element from the DOM.
	// This IIFE should also remove the corresponding message from the private array that was created
	// in the previous IIFE.
	deleteMess.removeMessage = function(id) {
		let currentElement = document.getElementById(id);
		currentElement.parentNode.remove();
	}

	deleteMess.removeFromArray = function(msgArray, id) {
		messagesArray.splice(id);
	}

	// deleteButton.addEventListener("click",
	// 	newChattyObj.removeMessage;
	// 	newChattyObj.removeFromArray;
	// })
	
	//clear button empties array of messages
	deleteMess.clearArr = function (arrName) {
		arrName.length = 0;
	}

	// Clear button removes text from msg div
	deleteMess.clearElement = function () {
		output.innerHTML = "";
	}

	// Disabling the clear button if no messages are entered into the DOM
	deleteMess.disableBtn = function () {
		if  (output.innerHTML === "") {
	    clear.disabled = true;
		} else {
	    clear.disabled = false;
		}
	};

	// clear.addEventListener("click", function() {
	// 	deleteMess.clearArr();
	// 	deleteMess.clearElement();
	// 	deleteMess.disableBtn();
	// });

	window.Chatty = window.Chatty || {};
	Chatty.DeleteMess = deleteMess;

}