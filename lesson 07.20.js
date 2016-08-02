// у функций есть метод bind - записывает в функции ("вмораживает" - делает постоянно) this
// любая функция, помещенныя в setTimeout etc (асинхронное поведение), теряет свой контекст
// в любом асинхронном вызове теряется контекст this
// this - это объект перед точкой в момент вызова (!)

// this в 'use strict' это undefined. Действие над undefined выдаст ошибку
//  this без 'use strict' это window

var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
};

setTimeout(function() {
  user.sayHi(); // Вася
}, 1000);


var user = {
  firstName: "Вася",
  sayHi: function(who) {
    alert( this.firstName + ": Привет, " + who );
  }
};

setTimeout(function() {
  user.sayHi("Петя"); // Вася: Привет, Петя
}, 1000);

// обёртка для функции func
function bind(func, context) {
  return function() { 
    return func.apply(context, arguments);
  };
}
var hello = bind(user.sayHi, user);
hello();

setTimeout(hello, 5000);
user.firstName = "Peter";

// bind возвращает функцию и жёстко привязывает к ней контекст

// держать отдельно User и функции
var user = {
  firstName: "Вася",
};
function sayHi() {
	alert( this.firstName );
}
setTimeout(bind(sayHi, user), 1000);

// карринг -  создание новой функции путём фиксирования аргументов существующей
function mul(a, b) {
  return a - b;
};
var double = mul.bind(null, 2);
console.log( double(3) );			// -1

// Декораторы
function sayHi(name) {
	console.log(name);
};
function Decorate(func) {
	return function() {
		var d = new Date();
		console.log("Your function was called in " + d.getHours() + ":" + d.getMinutes());
		func.apply(null, arguments);
	}
};
var decorated = Decorate(sayHi);
decorated("Kate");

// JSON
/* Java
   Script
   Object
   Notation */
 // формат данных в виде строки
var user = {
	firstName: "Vasya",
	age: 44,
	lastName: "Smith",
	pockets: ["coins", "phone"]
};
// превратить user в строку:
JSON.stringify(user);     // "{"firstName":"Vasya","age":44,"lastName":"Smith","pockets":["coins","phone"]}"
// ключи должны передаваться строкой
// недопустимы одинарные кавычки
// типы данных: числа, массивы, true/false не беруться в кавычки
// функции не попадают (опускаются)

// использовать в браузере ` - это закомментировать
// вручную:
var user = '{' +
	'"firstName": "Vasya",' +
	'"age": 44,' +
	'"lastName": "Smith",' +
	'"pockets": ["coins", "phone"]' +
'}';

var str = JSON.stringify(user);		// "{"firstName":"Vasya","age":44,"lastName":"Smith","pockets":["coins","phone"]}"
var o = JSON.parse(str);			// Object {firstName: "Vasya", age: 44, lastName: "Smith", pockets: Array[2]}

// проверять запятые
// может содержать вложенные массивы, объекты
// библиотека с датами momentJS.com 
// посмотреть внимательно приведение времени к текущему часовому поясу (автоматическое)
var str = JSON.stringify(user, ["firstName", "lastName"], 4);	// 4 это табуляция