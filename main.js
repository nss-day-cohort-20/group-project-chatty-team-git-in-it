function outputMessages (messageArray)  {
	let messageBlock = document.createElement('div');
	for (let i=0; i<messageArray.length; i++) {
		output.innerHTML += `<p class="msg">${messageArray[i]}</p><button class="delete-btn">Delete</button>`;
		output.appendChild(messageBlock);
	}
}

function createBigArray(jsonArray) {
}

function placeHolder(messages) {
	let jsonArr = Chatty.LoadMessages.getMessages();
	let newArr = jsonArr.concat(messages);

	console.log("new array", newArr);
}

Chatty.LoadMessages.retrieveMessages(createBigArray)
//
let addTheme = document.querySelector(".theme");

document.getElementById("dark-theme-box").addEventListener("click", function() {
	addTheme.classList.toggle("dark");
});

document.getElementById("large-text-box").addEventListener("click", function() {
	addTheme.classList.toggle("large");
});

// let wholeArray = arrayA.concat(arrayB);