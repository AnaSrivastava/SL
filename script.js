var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li= document.querySelector("li");

function inputLength() {
	return input.value.length;
}
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
  }
function createListElement() {
	var newe = document.createElement("li");
	newe.appendChild(document.createTextNode(input.value));
	input.value = "";

	var btn=document.createElement("button");
	btn.innerHTML="Delete";
	btn.onclick=removeParent;
	
	newe.appendChild(btn);
	ul.appendChild(newe);

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

 ul.onclick=function(event){
	var target = window.event.target;
	target.classList.toggle("done");
}