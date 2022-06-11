// Write your code here!
const testVar = "h1";
document.querySelector("main#main").remove();
let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Elle is the champion";
//newHeader.className = "victory";
const victory = document.getElementById("victory");
victory.innerHTML=
"<h1>YOUR-NAME is the champion</h1>"