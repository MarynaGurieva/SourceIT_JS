// ДЗ обойти двухмерный массив по змейке

// Функции
function hello () {
	var a = 1000;		// локальная переменная
	b = 3;				// создается глобальная переменная
}
// scope создается при вызове функции; кол-во вызовов функции = кол-ву scope`ов


// именовать функции через глагол
// именовать переменные через noun

// предпочтительно писать "маленькие" "короткие" функции;
// создавать функции как минимально неделимый элемент - самый простой
function getUser () {
	var user = getUser();
	var date = getLastVisitDate();
}
function getUser () {
	// magic
	return user;
}
function getLastVisitDate () {
	// magic
	return date;
}

// Function Declaration:
function sayHi (name) {		// name = a function argument
	// var name = "Vasya"	// для конкретного scope
	console.log(name);
}
sayHi("Vasya");
sayHi();					// передано undefined

function sayHi (name, surname) {		
	console.log(name);
}
sayHi(undefined, "Ivanov");		// передать только surname
sayHi(null, "Ivanov");			// более простой способ = варианту выше

// Передать значение по умолчанию:
// option #1
function sayHi (name = "Vasya", surname) {		// ещё не поддерживают все браузеры
	console.log(name);
}
// option #2
function sayHi (name, surname) {		
	name = name || "Vasya";				// name = false || "Vasya";
	console.log(name);
}
sayHi("Petya", "Ivanov");

function sayHi (name, age) {		
	name = name || "Vasya";				// name = false || "Vasya";
	age = age || 18;					// 0 = false
	if (typeof age === "undefined" || age === null) {		// при значении 0 будет 0
		age = 18;
	}
	alert ("Hello, " + name + age + " years not seeing");
}
sayHi("Admin", 0);

// Тернальный оператор - три операнда
// тернальный оператор должен иметь else Обязательно
if (typeof age === "undefined") {
		age = 18;
	}
// аналогично:
age = (typeof age === "undefined") ? age : 18;		// () "скобки" не обязательны, для читабельности

// Тернальный оператор - не использовать для функций
(loggedIn === true) ? sayHello() : byeBye(); 		// работать, но не стоит делать
(loggedIn) ? sayHello() : byeBye(); 				// более короткая запись

// Return - функция прекращает выполнение
// блокировать функцию : return в первой строчке функции
if (!name) return;				// !name это name == false
if (!name) {
	console.log("You must pass name!");
	return;
	// magic
}
// функция по default возвращает undefined

// Switch
if (nickname == "admin") {
	console.log("access granted");
} else if (nickname == "user") {
	console.log("access to main menu");
} else if (nickname == "guest") {
	console.log("access to price list");
} else {
	console.log("access denied");
}

var nickname = "admin";
switch (nickname) {			// Используется строгое (тройное ===) сравнение
	case "admin" :
		console.log("access granted");
		break;			// break прекращает выполнение switch
	case "user" :
		console.log("access to main menu");
		break;
	case "guest" :
		console.log("access to price list");
		break;
	default:
		console.log("access denied");
		break;
}
// работает первый case и после него все остальные Case игнорируются, если нет break

switch (true) {
	// a lot of case, but with 'break'
}

// return желательно должен быть один
// return может вернуть любой тип данных

// Функция счетчик - считает сколько раз функция была вызвана
var counter = 0;
function countMe () {
	return ++counter;
}

// функция может вернуть функцию
function showMessage () {
	return function () {...}
	// вернули функцию целиком
}
var mySuperFunction = showMessage();


// Замыкание
// Замыкание Это когда function() return function()
// смысл - замкнуть переменную - она скрыта между слоями и "не видна" снаружи
function countMe () {
	var counter = 0;			// Здесь переменная перезаписывается при выполнении функции superCount()
	function superCount () {
		return ++counter;		// в функции superCount() нет переменной counter, superCount() находит эту переменную в scope функции countMe()
	}
	return superCount;
}
var my = countMe();		// в переменную my будет записана функция superCount()
my();					// вызвали функцию superCount()

// сократили:
function countMe () {
	var counter = 0;			
	return function () {
		return ++counter;	
	}
}