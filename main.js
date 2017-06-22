function outputMessages (messageArray)  {
	let messageBlock = document.createElement('div');
	for (let i=0; i<messageArray.length; i++) {
		output.innerHTML += `<p class="msg">${messageArray[i]}</p><button class="delete-btn">Delete</button>`;
		output.appendChild(messageBlock);
	}
}

Chatty.LoadMessages.retrieveMessages(outputMessages);

let addTheme = document.querySelector(".theme");

document.getElementById("dark-theme-box").addEventListener("click", function() {
	addTheme.classList.toggle("dark");
});

document.getElementById("large-text-box").addEventListener("click", function() {
	addTheme.classList.toggle("large");
});

// let wholeArray = arrayA.concat(arrayB);