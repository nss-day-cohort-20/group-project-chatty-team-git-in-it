{
	let addMessages = Object.create(null);
	let inputBox = document.getElementById('msg-input');
	let output = document.getElementById("msg-output");
	let messageArray = [];

	addMessages.addToArray = function() {
		console.log("input", inputBox.value);
		userNewMsg = inputBox.value;
		messageArray.push(userNewMsg);
	};
  
  	addMessages.putUserMsgInDom = function () {
		let messageBlock = document.createElement('div');
		output.innerHTML += `<p class="msg">${messageArray[messageArray.length -1]}</p><button class="delete-btn">Delete</button>`;
		output.appendChild(messageBlock);
	}

	inputBox.addEventListener('keyup', function() {
		if (event.key === 'Enter') {
			addMessages.addToArray();
			addMessages.putUserMsgInDom();
			inputBox.value = '';
		}
	});

	window.Chatty = window.Chatty || {};
	Chatty.AddMessages = addMessages;
}
