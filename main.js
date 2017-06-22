let jsonArr = Chatty.LoadMessages.getMessages();
let messArr = Chatty.DOMInteraction.getAllMessages();

Chatty.LoadMessages.retrieveMessages(Chatty.DOMInteraction.putJsonMsgInDom);

// console.log("?",Chatty.DOMInteraction.addAllMessages(jsonArr, messArr));
// var bigArray = Chatty.DOMInteraction.addAllMessages(jsonArr, messArr);

// window.addEventListener("load", function(){
// 	Chatty.LoadMessages.retrieveMessages(Chatty.DOMInteraction.addAllMessages);
// })



// function createBigArray(jsonArray) {
// }

// function placeHolder(messages) {
// 	let jsonArr = Chatty.LoadMessages.getMessages();
// 	let newArr = jsonArr.concat(messages);

// 	console.log("new array", newArr);
// }

// Chatty.LoadMessages.retrieveMessages(createBigArray)

// // let wholeArray = arrayA.concat(arrayB);