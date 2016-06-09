var myNum = 123
var myNum = Number(123);		// альтернативное написание числа 123
// или +'123'
console.log(myNum);

var str1 = "Hello";
var str2 = `Hello and "hi"`
// var errStr = `Hello and "hi"`;
console.log(str1);
console.log(str2);

var something = true

var a = null;		// используют, когда необходимо обнулить переменную (после использования)

typeof null; 		// = "object" - общепризнанный баг

var obj = {
	monday: 10,
	tuesday: 20
};	
// а = ключ (всегда string), 10 это значение

// obj.monday; 		// покажет значение monday

var newObj = {
	a: 10,
	b: `apple`,
	c: false,
	d: null
};
console.log(newObj);

// Массивы в JS = коллекция однотипных элементов (в JS может хранить неоднотипные переменные)
// индекс массива начинается от нуля
var arr = [10, 20, "yellow", `red`];
arr[0]; 		// = 10 - "достучаться" до индекса 0 
console.log(arr);


arr.length;
var lastindex = arr.length - 1;
arr[arr.length - 1]; 		// эквивалентное написание

// Nan = Not Of Number
typeof NaN;			// = `number`

`12` * 3;		// =36

// почитать о функциях parseInt (Приводит к целому числу) & parseFloat (к числу с точкой)
var a = `21px`;
parseInt(a); 		// = 21
parseInt(`kj21px`); 	// = Nan
parseInt(21.999);
parseFloat(21.999);

// смотреть Math

var x = 10;

if (x === 10) {
	console.log(`a равно 10 (КО)`);
}

`21` == 21;		// сравниваются по значению, с приведением типов данных
`21` === 21;	// сначала смотрит типы, если разные - не сравнивает

'10' - true; 	// = 9
[1] + [2] - [3]; // = 9

// a % 2 === 0 проверка чётных чисел

a +=5;
a = a + 5;

a++;
a += 1;
a = a + 1;

var a = (5, 6); 	// = 6

var a = 5;
var b = 10;

if (a >= 5 && b === 10) {

};

// таблица искренности true & true = true... в других случаях false
// или || false || false = false... в других случаях true

// HOME:
var a = 10;
var b = 20;
// поменять переменные местами (два варианта)

var a = 10,
	b = 20,
	c = 30;
// для трех (или четырех) переменных с помощью конструкции if Найти наибольшее число и умножить его на тысячу;
// затем следующее по величине число умножить на сто
// с оставшимся числом ничего не делать