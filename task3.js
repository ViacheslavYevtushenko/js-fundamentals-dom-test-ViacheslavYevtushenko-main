
// Напишіть скрипт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// 
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// Виконання записувати у функцію applyStyles()




function applyStyles() {
	let createElements = document.querySelector(".create_elements")

	createElements.innerHTML = `
	<main class="mainClass check item">
		<div id="myDiv">
				<p>First paragraph</p>
		</div>
	</main> 
	`

}
applyStyles()

module.exports = applyStyles;
