{
	let addMessages = Object.create(null);
	let output = document.getElementById("msg-output");
	let messageArray = [];
	let combinedArray = [];

	addMessages.addToArray = function() {
		userNewMsg = inputBox.value;
		messageArray.unshift(userNewMsg);
	};
  
  	addMessages.putMsgsInDom = function (id, msg) {
  		let messageBlock = document.createElement('div');
		messageBlock.setAttribute("id", `${id}`)
		messageBlock.innerHTML = `<p class="msg">${msg}</p><button class="delete-btn">Delete</button>`;
		output.appendChild(messageBlock);
	}

	addMessages.assignIds = function(arrayToBeAssignedIds) {
		for (let i = 0; i < arrayToBeAssignedIds.length; i++) {
			addMessages.putMsgsInDom(i, arrayToBeAssignedIds[i])
		}
	}

	addMessages.putJsonMsgInDom = function (messageArray)  {
		let messageBlock = document.createElement('div');
		for (let i=0; i<messageArray.length; i++) {
			output.innerHTML += `<p class="msg">${messageArray[i]}</p><button class="delete-btn">Delete</button>`;
			output.appendChild(messageBlock);
		}
	}

	addMessages.getUserMessages = function() {
		return messageArray;
	}

	addMessages.combineAllMessages = function (Arr1, Arr2) {
		return Arr1.concat(Arr2);
	}

	//functionality to change to dark theme or enlarged text
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
