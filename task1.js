// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl

// const firstEl = document.querySelector(`#list > li`);
const firstEl = document.querySelector(`#list`).firstElementChild;
const secondtEl = document.body.children[0].firstElementChild.nextElementSibling;
const lastEl = document.body.children[0].lastElementChild;
const fourthEl = document.body.querySelector(`#list`).children[3];
const thirdtEl = document.body.querySelector(`#list`).children[3].previousElementSibling;


// console.log(firstEl);
// console.log(secondtEl)
// console.log(lastEl);
// console.log(fourthEl);
// console.log(thirdtEl);

module.exports = {
	firstEl,
	lastEl,
	secondtEl,
	fourthEl,
	thirdtEl,
};
