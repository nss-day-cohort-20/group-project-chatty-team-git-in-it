{
	let addMessages = Object.create(null);
	let inputBox = document.getElementById('msg-input');
	let output = document.getElementById("msg-output");
	let messageArray = [];

	addMessages.addToArray = function() {
		console.log("input", inputBox.value);
		userNewMsg = inputBox.value;
		messageArray.push(userNewMsg);
		placeHolder(messageArray)
	};

// One IIFE should contain a function that accepts an element id, and the user message,
// and then add the user's message - along with the delete button - to the specified parent element.
// Each message should be stored in a private array in this IIFE. This IIFE should also expose a function to read all messages, and delete a single message.
  	addMessages.putUserMsgInDom = function (id, msg) {
		let messageBlock = document.createElement('div');
		messageBlock.setAttribute("id", `${id}`)
		output.innerHTML += `<p class="msg">${msg}</p><button class="delete-btn">Delete</button>`;
		output.appendChild(messageBlock);
	}

	inputBox.addEventListener('keyup', function() {
		if (event.key === 'Enter') {
			addMessages.addToArray();
			addMessages.putUserMsgInDom();
			inputBox.value = '';
		}
	});

	addMessages.readAllMessages = function() {

	}

	window.Chatty = window.Chatty || {};
	Chatty.AddMessages = addMessages;
}
