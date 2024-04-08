// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles


function applyStyles() {
	const styleElements = document.querySelector(".style_elements");

	const title = styleElements.querySelector("#title").setAttribute("style", "background-color: rgba(0, 128, 0, 0.471);");
	const firstParagraph = styleElements.querySelector("#myDiv").firstElementChild.setAttribute("style", "font-weight: 700;")
	const secondParagraph = styleElements.querySelector("#myDiv").firstElementChild.nextElementSibling.setAttribute("style", "color: red;")
	const thirdParagraph = styleElements.querySelector("#myDiv").lastElementChild.previousElementSibling.setAttribute("style", "text-decoration: underline;")
	const fourthParagraph = styleElements.querySelector("#myDiv").lastElementChild.setAttribute("style", "font-style: italic;")

	const myList = document.getElementById("myList").setAttribute("style", "display: flex;");
	const remoteMyListMarkerOne = document.getElementById("myList").children[0].setAttribute("style", "list-style: none;");
	const remoteMyListMarkerTwo = document.getElementById("myList").children[1].setAttribute("style", "list-style: none;");
	const remoteMyListMarkerThree = document.getElementById("myList").children[2].setAttribute("style", "list-style: none;");

	const textSpanDelete = styleElements.querySelector("span").setAttribute("style", "display: none;")

}
applyStyles();

module.exports = applyStyles;

