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
см DropBox
исключающее "или"
лампочка - финальный узел; есть логический узел; в логический узел - два входа: выключатель и два выключатель+выкл
могут встретиться ! и XOR
написать скрипт, который будет принимать объект и показывать лампочка горит или нет
*/


/*
написать конструкцию, которая будет заменять XOR*/


/*смотреть решать задачки (6 шт) - для интернов чтобы учиться на джунов
javascript.ninja
*/


var n = new Number();	// new возвращает объект
var n = new Number(7);	// Number {[[PrimitiveValue]]: 7}
var n = Number(7);		// 7


function Test(name) {
	this.name = name;
	return {				// больший приоритет
		username: name
	}
};
var t1 = new Test("Vasya");		// Object {username: "Vasya"}

var obj = {};
obj.constructor;		// его функция конструктор
obj.__proto__;
obj.__proto__ === Object.prototype;		// true
Object.prototype

var arr = [];
console.dir(arr);		// смотреть методы
Function.prototype
({}).__proto__.__proto__	// null

var n = 5;
n.toFixed(2);		// "5.00"
n = new Number(n);			// n теперь уже объект
n.toLocaleString(3);		// "5"
n.toExponential();			// "5e+0"
n.valueOf();				// n = 5

[].join.call(arguments. "; ");		// [].join равно Array.prototype.join
[1,2,3].join("; ");

