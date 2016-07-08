var a = 10;
window.a;		// 10
(function () {
	var b = 100;		// b = 100; без var записывает в глобальный объект (или ближайший верхний scope)
}) ();
b; 				// error
window.b;		// undefined

// модуль - "завернуть" в самовызывающуюся функцию - скрыть от всех
(function () {
	'use strict';
	(function () {
		var b = 100;		// b = 100; без var записывает в глобальный объект (или ближайший верхний scope)
	}) ();
	console.log(b);
}) ();	

var obj = {
	name: "Vasya", 
	surname: "Ivanov"
};

delete obj.name;		// ставить ";" обязательно!!!
delete obj.surname;
// браузер самостоятельно выставляет ";" по своему усмотрению при окончании инструкции

// можно поставить ";" вначале своего кода; ставим точку с запятой ПЕРЕД модулем
;(function(){
   console.log('наш код');
})();

// сборщик мусора убирает объект, когда на него перестают все ссылаться (уже никто не ссылается)

// утечка памяти = memory leaks

// Объекты
var user = {
	name: "Vasya",
	sayHello: function() {
		console.log("Hello, my name is " + user.name);		// плохо использовать имя внутри метода в объекте
	}
};
user.sayHello();
var vasya = user;
user = null;
vasya.sayHello();
// использовать this - доступен только внутри метода (не объекта)!
// контекст вызова; потеря контекста; this вне метода это будет window
// this указывает на родительский объект метода
// this это объект перед точкой
var user = {
	name: "Vasya",
	sayHello: function() {
		console.log("Hello, my name is " + this.name);		// использовать this
	}
};


var user = { firstName: "Вася" };
var admin = { firstName: "Админ" };
function func() {
  console.log( this.firstName );
}
user.sayHello = func;			// создается функции новое свойство
// появился новый метод у функции
// функция = объект, объекты передаются по ссылке

function a() {
	"use strict";		// происходит потеря контектса, но this не становится Undefined
	console.log(this.firstName);
}

function a() {
	"use strict";		
	console.log(null.firstName);
}		// ошибка

// почитать дополнительно "ссылочный тип данных"

// написать объект калькулятор
var calculator = {
	first: undefined,			// значения по default
	second: undefined,		
	read: function(a, b) {		// принимает аргументы a = 10, b = 5
		this.first = a;
		this.second = b;
	},		
	sum: function() {
		return this.first + this.second;
	},
	mul: function() {
		return this.first * this.second;
	}
};
calculator.read(5, 10);
calculator.sum();			// 15
calculator.mul();			// 50

// задача "лесенка" ladder
var ladder = {
 
  step: 0,
 
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
 
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  }
 
};
ladder.up().up().up().down().down().down().up().up().up().up().up();		// Object {step: 5}