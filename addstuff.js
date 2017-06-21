var Chatty = (function (prevChatty) {
	let messageArray = //initially, our 5 JSON messages, as an imported private array
	

	let inputBox = document.getElementById('msg-input');
	inputBox.addEventListener('keyup', function(event) {
		if (event.key === 'Enter')  {
			userNewMsg = inputBox.value;
			messageArray.push(userNewMsg);
			//TODO call the function that gets the input and converts it to a part of the private array
		}
	}



})(Chatty || {});