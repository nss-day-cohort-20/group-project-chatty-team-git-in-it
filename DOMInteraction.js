{
	let addMessages = Object.create(null);
	let output = document.getElementById("msg-output");
	// let messageArray = [];
	let combinedArray = [];

	addMessages.addToArray = function() {
		let userNewMsg = inputBox.value;
		combinedArray.unshift(userNewMsg);
	};

	addMessages.pushJsonToCurrentArray = function(jsonArray) {
		combinedArray = jsonArray;
	}

  	addMessages.putMsgsInDom = function (id, msg) {
  		let messageBlock = document.createElement('div');
		messageBlock.setAttribute("id", `${id}`)
		messageBlock.innerHTML = `<p class="msg">${msg}</p><button class="delete-btn">Delete</button>`;
		output.appendChild(messageBlock);
	}
				//on load assigns json ids and pushes them to dom
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
		return combinedArray;
	}
//everytime this function is called it will
	addMessages.combineAllMessages = function (Arr1, Arr2) {
		let joinedArray = Arr1.concat(Arr2);
		combinedArray = joinedArray;
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
