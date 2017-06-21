{
	let addMessages = Object.create(null);

	let messageArray = [] //initially, our 5 JSON messages, as an imported private array

	let inputBox = document.getElementById('msg-input');

	let output = document.getElementById("msg-output");
	
	// gets the input and converts it to a part of the private array
	addMessages.addToArray = function() {
		if (event.key === 'Enter')  {
			console.log("input", inputBox.value);
			userNewMsg = inputBox.value;
			messageArray.push(userNewMsg);
		}
	};

	addMessages.addToDiv = function () {
		if (event.key === 'Enter')  {
			output.innerHTML += inputBox.value + `<br>`;
		}
	}

	inputBox.addEventListener('keyup', function() {
		addMessages.addToArray();
		addMessages.addToDiv();
	});
	
	window.Chatty = window.Chatty || {};
	Chatty.AddMessages = addMessages;
}