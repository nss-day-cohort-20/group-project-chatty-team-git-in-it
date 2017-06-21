{
	let clearMessages = Object.create(null);

	var clear = document.getElementById("clear-btn");
	var output = document.getElementById("msg-output");

	//clear button empties array of messages
	clearMessages.clearArr = function () {

	}

	// Clear button removes text from msg div
	clearMessages.clearElement = function () {
		output.innerHTML = "";
	}

	// Disabling the clear button if no messages are entered into the DOM
	clearMessages.disableBtn = function () {
		if  (output.innerHTML === "") {
	    clear.disabled = true;
		} else {
	    clear.disabled = false;
		}
	};

	clear.addEventListener("click", function() {
		clearMessages.clearArr();
		clearMessages.clearElement();
		clearMessages.disableBtn();
	});

	window.Chatty = window.Chatty || {};
	Chatty.ClearMessages = clearMessages;
}