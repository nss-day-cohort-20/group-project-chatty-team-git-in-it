console.log("MAIN js is linked!", );
	
function outputMessages (messageArray)  {
	console.log("message ara test", messageArray);
	let messageBlock = document.createElement('div');
	for (let i=0; i<messageArray.length; i++) {
		output.innerHTML += `<p class="msg">${messageArray[i]}</p><button class="delete-btn">Delete</button>`;
		output.appendChild(messageBlock);
	}
}

Chatty.LoadMessages.retrieveMessages(outputMessages);