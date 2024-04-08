// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

// Ваш код ..


function getUserData() {
	const newUser = document.querySelector("fieldset");

	const name = newUser.children[1].value;
	const phoneNumber = newUser.children[2].value;
	const dataOfBirth = newUser.children[3].value;
	const emailAddress = newUser.children[4].value;
	return {
		name, phoneNumber, dataOfBirth, emailAddress
	}
}
getUserData();

// const newUser = document.querySelector("fieldset");

// const nameUser = newUser.children[1].value;
// const mobileNumber = newUser.children[2].value;
// const dataBirth = newUser.children[3].value;
// const mail = newUser.children[4].value;

// console.log(newUser.children[1].value);
// console.log(newUser.children[2].value);
// console.log(newUser.children[3].value);
// console.log(newUser.children[4].value);

// let name = nameUser;
// let phoneNumber = mobileNumber;
// let dataOfBirth = dataBirth;
// let emailAddress = mail;

// console.log(name);
// console.log(phoneNumber);
// console.log(dataOfBirth);
// console.log(emailAddress);

module.exports = {
	name,
	phoneNumber,
	dataOfBirth,
	emailAddress
};