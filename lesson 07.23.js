// Декораторы

function sayHi(name) {
	console.log("Hello, my name is " + name);
};
function decorate(func) {
	return function() {
		var d = new Date(),
		    hour = d.getHours(),
		    minute = d.getMinutes();
		console.log("Time: " + hour + ":" + minute);

		func.apply(null, arguments);
	}
}
var sayHiExtended = decorate(sayHi);
sayHiExtended("Vasya");


var sayHiExt = function () {		// Vasya "улетает" в arguments
	var d = new Date(),
	    hour = d.getHours(),
	    minute = d.getMinutes(),
	    seconds = d.getSeconds();
	console.log("Time: " + hour + ":" + minute + ":" + seconds);
	sayHi.apply(null, arguments);	// альтернатива sayHi(a, b, c) - но тогда надо точно знать кол-во аргументов и прописывать их при объявлении function
}
sayHiExt("Vasya");

// псевдомассив arguments - это все переменные, которые передаются функции в момент ее вызова

// ООП в функциональном стиле
var u1 = {name: 123};
var u2 = {name: 456};
function hi() {
	console.log(this.name);
}


function getBoilTime() {			// если this только внутри функции, то контекст теряется
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
};
ершыюgetBoilTime = function() {		// если функция написана с this, тогда она не теряет this 
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
};

  var getBoilTime = function() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }.bind(this);					// можно только для Function Explanaton
  // для Function Declaration будет ошибка, т.к. Function Declaration выполняется на первом этапе, а bind выполняется на втором этапе (потом)

// обойти Bind - написать var self = this (первой строчкой) и всё

// ~~~~~~~~~~~ проверить код!
function CoffeeMachine(power, waterCapacity) {
	var waterAmount = 0;
	this.gatWaterAmount = function() {
		return waterAmount;
	};
	this.settWaterAmount = function(value) {
		if (waterAmount + value <= waterCapacity) {
			waterAmount += value;
		} else {
			waterAmount = waterCapacity;
			console.log("Out " + (value - waterCapacity));
		}
		
	};
	var WATER_HEAT_CAPACITY = 4200;

	var getBoilTime = function() {
    	return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}.bind(this);

	function onReady() {
    	alert( 'Кофе готов!' );
	}

	var id;
	this.run = function() {
		if (!waterAmount) {
			console.log("Not enough water");
		} else {
			id = setTimeout(onReady, getBoilTime());
		}
	};
	this.stop = function() {
		clearTimeout(id);
		console.log("STOP");
	};
};

var coffeeMachine = new CoffeeMachine(1000, 2000);
coffeeMachine.waterAmount = 1000;
coffeeMachine.run();


// часть кода:
function onReady() {
   	alert( 'Кофе готов!' );
};

// смотреть как "стилить" консоль


// Функциональное наследование
// наследование от функций

var enabled = false;
this.enable = function() {
	enabled = true;
};
this.disable = function() {
	enabled = false;
};

function Fridge() {
	// одинаковые методы
	// code...
}

// создадим функция-конструктор, которая будет описывать общие свойства для всех экземпляров класса
function Machine() {
	"use strict";
	// this - {}
	var enabled = false;
	this.enable = function() {
		enabled = true;
	};
	this.disable = function() {
		enabled = false;
	};	
	// return this;
}
// получить методы в кофе-машине и холодильнике:
function Fridge() {
	// this = {};
	debugger;
	this.name = "fridge";
	Machine.apply(this);
	// return this;
};
var fr = new Fridge();			// Fridge {name: "fridge"}
console.log(fr);

function Microwave() {
	// this = {};
	debugger;
	this.name = "microwave";
	Machine.apply(this);
	// return this;
};
var mw = new Microwave();			// Microwave {name: "microwave"} 
console.log(mw);

// добавить в кофемашину... + проверка на включение
coffee.enable();						 
// сделать переменную enadled публичной!
function Machine() {
	"use strict";
	this._enabled = false;		// protected переменные - через нижнее подчёркивание (не трогать!) - можно читать (не перезаписывать!)
	this.enable = function() {
		_enabled = true;
	};
	this.disable = function() {
		_enabled = false;
	};	
	// return this;
}

// множественное наследование - можно наследовать одновременно от нескольких "родителей"

// переопределение методов
// добавить декоратор к методу

var oldEnable = this.enable;
this.enable = function() {			// перезаписали enable
	console.log("Turn on a green");
	oldEnable.apply(this);
};
// или с bind:
var oldEnable = this.enable.bind(this);
this.enable = function() {			// перезаписали enable
	console.log("Turn on a green lamp");
	oldEnable();
}