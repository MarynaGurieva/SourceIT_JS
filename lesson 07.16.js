// Дескрипторы
var arr = [10, 20, 39, 45];
arr.name = "Vasya";			// записали в массив свойство name (т.к. массив это объект)
console.log(arr);			// [10, 20, 39, 45, name: "Vasya"]
// если пройти по массиву циклом for - выведуться все значения по индексу
// просмотреть все ключи массива:
for (var key in arr) {
	console.log(arr[key]); 
};
/*  10
	20
	39
	45
	Vasya   */
// не обходить массив for...in

var o = {};		// JS выполняет: var o = new Object(); 

// дескриптор - это объект настроек
"use strict";
var obj = {
	name:"Vasya";
};

Object.defineProperty(obj, "name", {
	value: "Vasya", // значение свойства, по умолчанию undefined
	writable: false, // значение свойства можно менять, если true. По умолчанию false.
	configurable: false, // если true, то свойство можно удалять, а также менять его в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.
	enumerable: false // если true, то свойство просматривается в цикле for..in и методе Object.keys(). По умолчанию false.
});
// get – функция, которая возвращает значение свойства. По умолчанию undefined.
// set – функция, которая записывает значение свойства. По умолчанию undefined.

/*Чтобы избежать конфликта, запрещено одновременно указывать значение value и функции get/set. 
Либо значение, либо функции для его чтения-записи, одно из двух. 
Также запрещено и не имеет смысла указывать writable при наличии get/set-функций.*/

Object.defineProperty(obj, "name", {
	writable: true;
});

"use strict";
var arr = [10, 20, 39, 45];
console.dir(arr);
Object.defineProperty(arr, "name", {
	value: "Vasya", 
	writable: true, 
	configurable: false,
	enumerable: false,
});

// get читается, когда вызываем свойство; set читается, когда что-то записываем в свойство
arr.name = "Petya"; 

"use strict";
var o = {
	name: 1
};
// через дескриптор:
Object.defineProperty(o, "self", {
	get: function() {
		return this;	// можно вернуть что угодно
	}
});


// Статичные и фабричные методы
// счётчик:
var counter = 0;
function Article() {
	this.name = name;
	counter++;
};
var a1 = new Article(1);
var a2 = new Article(2);
var a3 = new Article(3);
counter;		// 3

Article.counter = 0;		// статическое свойство, оно принадлежит функции
function Article(){
	this.name = name;
	Article.counter++;
};
var a1 = new Article(10);
var a2 = new Article(20);
var a3 = new Article(30);

// Ctrl + D это выделить одинаковые символы в коде

// статические методы
Article.counter = 0;		
Article.getCounter = function Article() {		// статический метод - один на всех
	return this.counter;
};

// Синтаксис метода call:
func.call(context, arg1, arg2, ...)
// Вызов func.call(context, a, b...) – то же, что обычный вызов func(a, b...), но с явно указанным this(=context).

// this для конкретного вызова сделать равным таким, какой нужен (1 вариант)
// "Вморозить" намертво this в функцию (2 вариант)
function sayHi() {
	console.log(this.name);
};			
sayHi();    // undefined (Для name "")
var user = {
	name: "User123"
};
sayHi.call(user);		// User123 -> передает указанный this (в данном случае user)

var user = {
	uName: "Vasya"
};

function sayHi(message, age) {
	console.log(message + this.uName + ". I am " + age + " years old");
};	
sayHi("Hello, my name is ");		// Hello, my name is undefined

sayHi.call(user, "Hello, my name is ", 30);		// Hello, my name is Vasya. I am 30 years old
sayHi.apply(user, ["Hello, my name is ", 30]);  // Принимает массив аругментов; полезно взять все аргументы из одной функции и передать в другую
// в любой функции есть массив аргументов, которые она принимает

// Синтаксис метода apply:
func.apply(context, [arg1, arg2]);
// Вызов функции при помощи func.apply работает аналогично func.call, но принимает массив аргументов вместо списка.

// пример apply
// объявляем объект, который у нашей ф-ции будет в роли this
var o = {
   name: 'Vasya',
   surname: 'Petrovich'
};
 
// сама подопытная функция
function hello(msg, age) {
   console.log(msg, this.name, this.surname, age);
}
 
// пишем функцию-декоратор, которая будет вызывать ф-цию hello
// с определенным набором параметров, взятых из ее arguments
function sayHello() {
   hello.apply(o, arguments);
}
sayHello('Привет, меня зовут ', '30 лет');