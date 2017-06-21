console.log("well at least it's linked", );

{
	let addMessages = Object.create(null);
	let messageOutputDiv = document.getElementById("msg-output");
	let inputBox = document.getElementById('msg-input');

	inputBox.addEventListener('keyup', function() {
		if (event.key === 'Enter')  {
			console.log("input", inputBox.value);
			let userNewMsg = inputBox.value;
			messageArray.push(userNewMsg);
			//TODO call the function that gets the input and converts it to a part of the private array
			putUserMsgInDom();
		};
	});

	function putUserMsgInDom() {
			let messageBlock = document.createElement('div');
			messageBlock.innerHTML = `<p class="msg">${messageArray[messageArray.length -1]}</p><button class="delete-btn">Delete</button>`;
			messageOutputDiv.appendChild(messageBlock);
	}

	window.Chatty = window.Chatty || {};
}
