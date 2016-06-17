var a = 10;
console.log(a++);
console.log(a);

if (a) {}	// короткая запись приведения типов а = true
if (!a) {} 	// a = false
// Будет приобразовано к логическому значению

var a = 'hello';
if (a) {
	console.log(a);
}

// Объект это всегда true; смотреть исключения 

// массивы

var arr = [1, 2, 3, 'yellow'];
arr.length		// длина массива
arr[0];			// первый элемент массива
arr[arr.length - 1];		// последний элемент массива


// Цикл while
var i = 0;				// option 1
while (i <= 10) {
	console.log(i);
	i++;
}

var i = 0;				// option 2
while (i++ <= 10) {
	console.log(i);
}

var i = 0;				// option 3
while (i <= 10) {
	console.log(i++);
}

// выполнится по крайней мере один раз:
var i = 0;	
do {
	console.log(i);
	i++;
} while (i <= 10)


// Цикл for
for (var i = 0; i < 10; i++) {		// первый элемент - один раз в жизни цикла; последний элемент выполняется ПОСЛЕ каждой итерации
	console.log(i);
}
// создавать однотипные элементы, например, строки или столбцы
// элементы цикла можно пропускать, см учебник

// цикл может обходить массив = получать каждый его элемент
var arr = ['apple', 'red', 'cup'];
for (var i = 0; i < arr.length; i++) {	
	console.log(arr[i]);
}

var obj = {
	id: 1,
	age: 25,
	name: "Ann"
};
for (var key in obj) {
	console.log(key);		// key === 'id'
	console.log(obj[key]);					// если спрашиваем несуществующий ключ - будет Undefined (проверить!!!)
}

for (var key in arr) {
	console.log(key + ": " + arr[key]);		// key === 'id'
}

// Раздел "Массивы: методы"
var arr = ['apple', 'red', 'phone'];
arr[arr.length] = 123;
console.log(arr);
// альтернативный вариант:
arr.push(123); 		// метод push добавляет в конец массива
var CurrentLength = arr.push(123); 	// сохраняет текущую длину массива в переменную
// все методы модифицируют Length

var arr = ['apple', 'red', 'phone', 'delete'];
arr.pop(); 		// удаляет последний элемент и его возвращает сразу
var deletedElement = arr.pop();

// unshift = добавить элемент; shift = удалить элемент
var arr = ['apple', 'red', 'phone'];
console.log(arr);
arr.unshift("number 1");
arr.unshift("number 2"); 		// добавляет СЛЕВА и пересчитывает индексы каждого элемента ("затратная операция")
console.log(arr);

// инструмент для измерения производительности времени - например, сравнить что быстрее
console.time('blabla');			// парный
	var a = "new";
console.timeEnd('blabla');	

var arr = [];
console.time('push');
arr.push(1);
console.timeEnd('push');

console.time('ind');
arr[arr.length] = 2;
console.timeEnd('ind');

// посмотреть "экранировать" кавычки
// самостоятельно прочитать прерывание циклов break

// Массив превратить в строку, строку - в массив
var arr = ['apple', 'red', 'phone'];
arr.join();			// массив остался массивом, возвращает строку без проблелов (по умолчанию разделитель - запятая)
arr.join('~');		// в качестве разделителя ~
var str = "apple~red~phone";
str.split('~'); 	// по default не знает как "разбивать", указывать разделитель из массива!
// смотреть с буквой r и "пустотой":
str.split('r');
str.split('');

// создать новый массов:
var arr = [];
var arr2 = new Array();
var arr2 = new Array(10);		// создаст массив из десяти элементов с undefined
arr2.length; 					// = 10

new Array(4).join("Ok");

// Удаление:
var arr = ['apple', 'red', 'phone'];
delete arr[2]; 		// удаляет значение, но ячейка остается
arr;
arr.length;

var arr = ['apple', 'red', 'phone'];
arr.splice(1, 1);		
// Первый аргумент = индекс массива, скоторого начать удаление включительно; второй - кол-во элементов для удаления; третий - элементы вместо удаленных
arr;
var arr = ['apple', 'red', 'phone'];
arr.splice(1, 1, "black", "yellow");
arr;

// в документации необязательные элементы обозначаются в []

var arr = ["apple", "black", "yellow", "phone"];
arr.slice(1, 3);
// скопировать значения с указанного элемента включительно по указанный элемент НЕвключительно
arr.slice(2); 	// скопировать значения с указанного элемента включительно До конца
arr.slice(-2); 	// копировать с "конца"
arr.slice(); 	// скопировать массив целиком

var a = {};		// переменная "указывает" на объект
var b = a;		// b будет равна объекту (тому же самому), обе переменные a и b указывают на один и тот же объект
// манипуляции с одной переменной вызовут изменения в другой (т.к. указывают на один и тот же объект)