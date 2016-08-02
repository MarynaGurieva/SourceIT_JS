// Прототипы
var obj = {};
// у объекта есть скрытое свойство (два нижних подчеркивания)
obj.__proto__		// позволяет связать один объект  другим
// когда создается объект, JS по умолчанию создает им методы (см ._proto_)
// когда прототипы заканчиваются, и свойство не найдено, получается undefined

var animal = {
	eats: true
};
var rabbit = {
	jumps: true,
	extraData: animal
};
rabbit.extraData.eats;		// true
rabbit.__proto__ = animal;
rabbit.eats;		// true
delete rabbit.eats;
rabbit.eats;	
rabbit.eats = "is eating";
rabbit.eats;		// "is eating"
animal.eats;		// true; "is eating" Только для rabbit


var animal = {
	breath: true
};
var mammal = {
	eats: = true
};
var rabbit = {
	jumps: true
};
mammal.__proto__ = animal;
rabbit.__proto__ = mammal;

var animal = {
	eats: true
};
var rabbit = {
	jumps: true,
};
rabbit.__proto__ = animal;
rabbit.hasOwnProperty("eats");		// false - является ли свойство родным
rabbit.hasOwnProperty("jumps");		// true
for (var key in rabbit) {
	console.log(key);
};			// выводит все ключи - сначала свои родные, потом остальные от прототипов
for (var key in rabbit) {
	console.log(key);
	if (rabbit.hasOwnProperty(key)) {
		console.log("Own Property");
	}
};	
for (var key in rabbit) {
	var msg = "%c";
	msg += rabbit.hasOwnProperty(key) ? key + " is own" : key;
	console.log(msg, "color: green;");
};

object.create(null);		// создает Идеальный объект без прототипов

var obj = Object.create(null);
obj;
obj.__proto__;		// undefined

var animal = {
	eats: true
};
var rabbit = Object.create(animal);

// ._proto_ не работает в IE10-


// new task
var head = {
  glasses: 1
};
var table = {
  pen: 3,
  __proto__: head
};
var bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};
var pockets = {
  money: 2000,
  __proto__: bed
};


// Свойство F.prototype и создание объектов через new
var animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
  this.__proto__ = animal;
};
var rabbit = new Rabbit("Кроль");
console.log( rabbit ); 
console.log( rabbit.eats );		// true, из прототипа

var animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
};
Rabbit.prototype = animal;
var rabbit1 = new Rabbit("Bugs");
var rabbit2 = new Rabbit("Bunny");


var animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
};
console.log(Rabbit.prototype);		// выведет "почти пустой" объект
// циклическая ссылка:
{
	constructor: Rabbit
}
var rabbit1 = new Rabbit("Bugs");
rabbit.__proto__ = {
	constructor: rabbit 		// функция-кнструктор
}
var r2 = new (rabbit.constructor)(); 		// rabbit.constructor - это Rabbit

// у объектов всегда proto, у функций - прототип


function Hourse(name) {
	this.name = name;
};
h1.constructor;						
Hourse.prototype = animal;
console.log(h1.constructor);		// undefined

var h1 = new Hourse("Resinant");
h1.constructor;

Hourse.prototype = {		// если не добавить constructor, то старый constructor будет стёрт
	eats: true,
	constructor: Hourse
};
// всегда добавлять constructor, если переопределяешь prototype / добавляешь свойства

Hourse.prototype.eats = true;		// дописали в него свойство eats


// ДЗ "лошадь" (см HomeWork_07.27)

var stable = {
	totalMileage: 0
}
function Horse(name) {
	this.name = name;
	this.mileage = 0;
	this.run = function(value) {
		this.mileage += value;
		stable.totalMileage += value;
		// Horse.prototype.totalMileage ...
	};
}

var h1 = new Horse("h1");
console.log("mileage", h1.mileage);
console.log("totalMileage", stable.totalMileage);
h1.run(50);
console.log("mileage", h1.mileage);
var h2 = new Horse("h2");
h2.run(30);
console.log("mileage", h2.mileage);

// Лошадки. Часть 2
/*1. Добавить лошадкам свойство "усталость".
Лошадка пробегает 1 км, у нее увеличивается усталовть на единицу.
Максимальная усталость 10 единиц.
Когда лошадь достигает максимальной усталости - сделать лошадке setTimeout (например, 1 секунду) на отдых.
Усталость обнуляется.
После отдыха лошадь добегает оставшиеся километры, с учетом увеличения усталости.

рекурсивность. запускать run, когда усталость = 0.
*/

/*Задача на рекурсию
лампочка - дерево
исключающее "или"
лампочка - финальный узел; есть логический узел; в логический узел - два входа: выключатель и два выключатель+выкл
могут встретиться ! и XOR
написать скрипт, который будет принимать объект и показывать лампочка горит или нет
*/


/*
написать конструкцию, которая будет заменять XOR*/