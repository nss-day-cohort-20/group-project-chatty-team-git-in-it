//  Clears msg div

//  Clear array of user input messages

//  disabled if there are no messages in the div

// (there are tips on eventlisteners and setting element attributes in the readme )
console.log("I work!");

var clear = document.getElementById("clear-btn");
var output = document.getElementById("msg-output");

// Clear button function
function clearElement (clickEvent) {
	// document.getElementById("dark-theme-box").checked = false;
	// document.getElementById("large-text-box").checked = false;
	input.value.innerHTML = "";
	document.getElementById("msg-output").value = "";
}

clear.addEventListener("click", clearElement);

//Disabling the clear button if no messages are entered into the DOM

function disableBtn() {
	if  (output.value === ""); {
    document.getElementById("clear-btn").disabled = true;
} else {
    document.getElementById("clear-btn").disabled = false;
}
};

//test
// var input = document.getElementById("msg-input");

// function inputKeypress() {
// 	console.log(event);
// 	output.innerHTML= `<p class="msg">${input.value}</p>`
// }
// input.addEventListener("keypress", inputKeypress);

// name of array = []