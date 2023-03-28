console.log(13);

// Сумма свойств объекта
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// 	let salaries = {
// 	  John: 100,
// 	  Ann: 160,
// 	  Pete: 130
// 	}
// 	Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// 	Если объект salaries пуст, то результат должен быть 0.

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
};

	let sum = 0;
	for (let someKey in salaries) {
		sum = sum + salaries[someKey];
	};

console.log(sum);

// Умножаем все числовые свойства на 2
// 	Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// 	Например:

// 	// до вызова функции
// 	let menu = {
// 	  width: 200,
// 	  height: 300,
// 	  title: "My menu"
// 	};

// 	multiplyNumeric(menu);

// 	// после вызова функции
// 	menu = {
// 	  width: 400,
// 	  height: 600,
// 	  title: "My menu"
// 	};
// 	Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// 	P.S. Используйте typeof для проверки, что значение свойства числовое.

let obj = {
	width: 200,
	height: 300,
	title: "My menu"
};

console.log(obj);

let multiplyNumeric = (obj) => {
	for (let key in obj) {
		let typeOfKey = typeof( obj[key] );
		if (typeOfKey === "number") {
		obj[key] = 2 * obj[key];
		}
	}
}

multiplyNumeric(obj);
console.log(obj);



