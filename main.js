

Chatty.LoadMessages.retrieveMessages(Chatty.DOMInteraction.putJsonMsgInDom);
// var bigArray = Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr);
// console.log("whole array?", bigArray);
let inputBox = document.getElementById('msg-input');
let jsonArr = Chatty.LoadMessages.getMessages();
let userArr = Chatty.DOMInteraction.getAllMessages();

inputBox.addEventListener('keyup', function() {
		if (event.key === 'Enter') {
			Chatty.DOMInteraction.addToArray();
			Chatty.DOMInteraction.putUserMsgInDom("id", inputBox.value);
			inputBox.value = '';
			console.log("whole array?", Chatty.DOMInteraction.combineAllMessages(jsonArr, userArr));
		}
	});
// function createBigArray(jsonArray) {
// }

// function placeHolder(messages) {
// 	let jsonArr = Chatty.LoadMessages.getMessages();
// 	let newArr = jsonArr.concat(messages);

// 	console.log("new array", newArr);
// }

// Chatty.LoadMessages.retrieveMessages(createBigArray)

// // let wholeArray = arrayA.concat(arrayB);