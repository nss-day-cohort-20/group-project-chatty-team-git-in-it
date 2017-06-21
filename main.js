console.log("MAIN js is linked!", );
	
function outputMessages (messagesArray)  {
	console.log("message ara", messagesArray);
}

Chatty.LoadMessages.retrieveMessages(outputMessages);


let addTheme = document.querySelector(".theme");

document.getElementById("dark-theme-box").addEventListener("click", function() {
	addTheme.classList.toggle("dark");
});

document.getElementById("large-text-box").addEventListener("click", function() {
	addTheme.classList.toggle("large");
});
