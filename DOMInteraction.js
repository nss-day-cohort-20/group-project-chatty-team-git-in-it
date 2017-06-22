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

// One IIFE should contain a function that accepts an element id, and the user message,
// and then add the user's message - along with the delete button - to the specified parent element.
// Each message should be stored in a private array in this IIFE. This IIFE should also expose a function to read all messages, and delete a single message.
  	addMessages.putUserMsgInDom = function (id, msg) {
		let messageBlock = document.createElement('div');
		messageBlock.setAttribute("id", `${id}`)
		output.innerHTML += `<p class="msg">${msg}</p><button class="delete-btn">Delete</button>`;
		output.appendChild(messageBlock);
	}

	addMessages.putJsonMsgInDom = function (messageArray)  {
		let messageBlock = document.createElement('div');
		for (let i=0; i<messageArray.length; i++) {
			output.innerHTML += `<p class="msg">${messageArray[i]}</p><button class="delete-btn">Delete</button>`;
			output.appendChild(messageBlock);
		}
	}

	inputBox.addEventListener('keyup', function() {
		if (event.key === 'Enter') {
			addMessages.addToArray();
			addMessages.putUserMsgInDom();
			inputBox.value = '';
			let bigArray = addMessages.addAllMessages(jsonArr, messArr);
			console.log("whole array?", bigArray);
		}
	});

	addMessages.getAllMessages = function() {
		return messageArray;
	}

	addMessages.addAllMessages = function (Arr1, Arr2) {
		let bigAssArray = Arr1.concat(Arr2);
		return bigAssArray
	}

	let addTheme = document.querySelector(".theme");

	document.getElementById("dark-theme-box").addEventListener("click", function() {
		addTheme.classList.toggle("dark");
	});

	document.getElementById("large-text-box").addEventListener("click", function() {
		addTheme.classList.toggle("large");
	});

	window.Chatty = window.Chatty || {};
	Chatty.DOMInteraction = addMessages;
}
