	
{
	let addMessages = Object.create(null);
	let messageArray = [] //initially, our 5 JSON messages, as an imported private array
	let inputBox = document.getElementById('msg-input');
	let output = document.getElementById("msg-output");

	addMessages.addToArray = function() {
		if (event.key === 'Enter')  {
			console.log("input", inputBox.value);
			userNewMsg = inputBox.value;
			messageArray.push(userNewMsg);
		}
	};
  
  addMessages.putUserMsgInDom = function () {
			let messageBlock = document.createElement('div');
			messageBlock.innerHTML = `<p class="msg">${messageArray[messageArray.length -1]}</p><button class="delete-btn">Delete</button>`;
			messageOutputDiv.appendChild(messageBlock);
	}

	inputBox.addEventListener('keyup', function() {
		addMessages.addToArray();
		addMessages.putUserMsgInDom();
	});
	
	window.Chatty = window.Chatty || {};
	Chatty.AddMessages = addMessages;
}
