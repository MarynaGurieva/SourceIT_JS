// Преобразование объектов: toString и valueOf
!!-Infinity;		// true
// !! приведение к булевому значению

// Любой объект в логическом контексте – true, даже если это пустой массив [] или объект {}.
"" + {a: "VAsya"};		// "[object Object]"
"" + [1, 2, 3, 4, 5];	//"1,2,3,4,5"
// у любого объекта есть свойство toString
var obj = {a: "VAsya"};
obj.toString;			// function toString() { [native code] }
//  строка + что-угодно = строка
// строка + объект будет строка
obj.toString = function() {
	return "object Object";
};
obj.toString = function() {
	return this.join(",");
};
arr = [1, 2, 3, 4, 5];
arr.join(",");			// "1,2,3,4,5"
"" + arr;				// "1,2,3,4,5"

// текст функции приводится к строке
function f() {};
"" + f;			//"function f() {}"

var obj = {a: "VAsya"};
1 + obj;				// "1[object Object]"
arr = [1, 2, 3, 4, 5];
1 + arr;				// "11,2,3,4,5"
obj * 1;				// NaN

// когда пытаемся обратиться к объекту как к числу, "дёргается" метод valueOf,
// и если valueOf нет, "дёргается" метод toString

var date = new Date();
date * 1;		// приведение к числу
var obj = {a: "VAsya"};
obj.toString = function() {			// переопределил toString
	alert("Don't change it");
	return JSON.stringify(this);
};
// у большинства объектов нет valueOf
obj.valueOf = function() {			// чтобы пользоваться valueOf, необходимо создать его	
	return 1;
}
"" + obj;
obj + 1;		// 2

var date = new Date();
date;					// Wed Jul 13 2016 19:34:34 GMT+0300 (Финляндия (лето))
date + '';				// "Wed Jul 13 2016 19:34:34 GMT+0300 (Финляндия (лето))"
date * 1;				// 1468427674832

obj + 1;				// 2
delete obj.valueOf;		// удалить 
delete obj.toString;	// удалить назначенный toString, глобальный toString остаётся

console.error("OK");
console.warn("OK");
console.info("OK");

if ([]) {			// Приведение к true
	console.info("OK");
}
if ([]) {
	console.log("%cHello, %cWord", "color: red", "color: green");
}
// красить текст в разные цвета

if ([] == false) {			// сначала сравнение: приведение к числу, [] это пустая строка '' -> это ноль 0; false это ноль 0		
	console.info("OK");
}

!![];		// true
if([] == {}) {		// false - если это не один объект (не указывают на один объект); если ссылаются на один объект - это true
	alert();
};
// сравнить два объекта = написать рекурсивную функцию - поэлементное сравнение

var str = "hello";
// JS на момент выполнения метода создает объект над примитивом "строка", выполняет действия и возвращает результат
var value = new Boolean(false);
value;			// Boolean {[[PrimitiveValue]]: false}
// JS использует "короткий цикл вычислений"

// Функции - конструкторы
var user = {
	id: 0,
	name: "Admin",
	email: "test@test.com"
};
// в функциях-конструкторах необходимо называть функции с большой буквы
// имя функции-конструктора обозначает сущность, которую она создает
function User() {};
var u1 = new User();
u1;			// User {} это название функции
function User() {
	this.id = 0;
	this.name = "Admin";
	this.email = "test@test.com";
};
var u1 = new User();
u1;					// User {id: 0, name: "Admin", email: "test@test.com"}

function User(name, email) {
	this.id = 0;
	this.name = name || "Guest";
	this.email = email || "n/a";
};
var u1 = new User("Vasya", "test@test.com");
var u2 = new User("Petys", "petr@test.com");
u1;			// User {id: 0, name: "Vasya", email: "test@test.com"}
u2;			// User {id: 0, name: "Petys", email: "petr@test.com"}

// конструктором становится любая функция, которая вызвана через new
// свойства, которые создаются через this, называются публичными
function Animal(name) {
  var drunk = false;		// не доступно внутри объекта, приватные свойства
  this.name = name;
  this.getDrunk = function() {		// меттод геттер - что-то возвращает getter
  	return drunk;
  };
    this.setDrunk = function(value) {		// меттод сеттер - что-то принимает setter
  	drunk = value;
  };
};
var animal = new Animal("ёжик");
animal;						// Animal {name: "ёжик", canWalk: true}
// методы бывают публичные и приватные

var animal = new Animal("Petrovych");
animal;		// Animal {name: "Petrovych"}
animal.setDrunk(true);
animal.getDrunk(true);		// true - проверили

function Person(name) {
	// this = {};
	this.name = name;
	// return this;   происходит неявно
	var drunk = false;
	// лежит внутри scope, это замыкание; this ищет переменные в scope функции, находит, делает над ним действие и возвращает
};
var user = new Person("Petrovych");			// Person {name: "Petrovych"}

function Person(name) {
	this.name = name;
	// return this;   происходит неявно
	return true;		// игнорируется
};
// если возвращается примитив - он игнорируется
// При вызове return с примитивным значением, оно будет отброшено.
var user = new Person("Petrovych");			
user;		// Person {name: "Petrovych"}
function Person(name) {
	this.name = name;
	return {name: name};		// возвращает объект
};
var 
// При вызове return с объектом, будет возвращён он, а не this
user = new Person("Petrovych");	
user;		// Object {name: "Petrovych"}

function Person(name) {
	this.name = name;
	this.sayHello = function() {		// Function Expression
		console.log("hi");
	};
};
var u1 = new Person("Petrovych");
var methods = {					// прототипы
	sayHello: function() {	
		console.log("hi");
	};
};
var users = [];
for (var i = 0; i < 100; i++) {
	users.push(new Person("Petrovych" + i));
};
// в объектах храняться только уникальные значения, а методы - в прототипах
// методы не храняться сто раз одинаково, они хранятся в прототипах

// функцию-конструктор можно запустить без скобок (когда функция-конструктор заведомо не принимает аргументы)

var str = '21344       ';
str.trim();		// обрезает крайние пробелы, возвращает копию строки
str;			// "21344       "
str = str.trim();	// перезаписали
str;				// "21344"