{
	let addMessages = Object.create(null);
	let output = document.getElementById("msg-output");
	let combinedArray = [];

	// adds new user message to private array
	addMessages.addToArray = function() {
		let userNewMsg = inputBox.value;
		combinedArray.unshift(userNewMsg);
	};

	// takes json array on load and populates the private array
	addMessages.pushJsonToCurrentArray = function(jsonArray) {
		combinedArray = jsonArray;
	}

	// adds message to output box based on passed in ID and Message
  	addMessages.putMsgsInDom = function (id, msg) {
  		let messageBlock = document.createElement('div');
		messageBlock.setAttribute("id", `${id}`)
		messageBlock.innerHTML = `<p class="msg">${msg}</p><button class="delete-btn">Delete</button>`;
		output.appendChild(messageBlock);
	}

	// takes an array and pulls out the index and corresponding message, sends to putMsgsInDom
	addMessages.assignIds = function(arrayToBeAssignedIds) {
		for (let i = 0; i < arrayToBeAssignedIds.length; i++) {
			addMessages.putMsgsInDom(i, arrayToBeAssignedIds[i])
		}
	}
	// gives updated array on call
	addMessages.getUserMessages = function() {
		return combinedArray;
	}

	// functionality to change to dark theme or enlarged text
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
