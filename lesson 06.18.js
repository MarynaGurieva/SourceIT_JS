var arr = ["apple", "black", "yellow", "phone"];
arr.forEach(function(value, key) {
	console.log(value);
	})

var arr = [1, 12, 2, 3, 21];
arr.sort();				// сортирует массив как строки; [1, 12, 2, 21, 3]

// сортировка по числовым значениям
var arr = [1, 12, 2, 3, 21];
arr.sort(function(a, b){
	if (a > b) return 1;		// 1 это поменять местами
	if (a < b) return -1;		// -1 это ничего не делать
})
console.log(arr);

var arr = [1, 12, 2, 3, 21];
arr.sort(function(a, b){
	return a - b;
})
console.log(arr);

var arr = [1, 2, 3, 4, 5];
arr.reverse();				// развернуть порядок [5, 4, 3, 2, 1]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2);		// массив слева - будет слева, справа - будет справа
console.log(arr3);
// в основном используется, чтобы конкатинировать массивы
// можно также дописывать элементы
var arr3 = arr1.concat(arr2, "apple");
console.log(arr3);

// поиск в массиве - "строго" по тройному ('строгому' ===) совпадению; узнать есть ли какой-то элемент
// в IE-8 не поддерживается indexOf & lastIndexOf
var party = ["Ivanov", "Petrov", "Jackson"];
party.indexOf("Sidirov");		// если находит элемент, то возвращает индекс найденного элемента; если не находит - возвращает -1
party.indexOf("Petrov");
party.indexOf("Jackson");

var party = ["Ivanov", "Petrov", "Jackson", "Ivanov"];
party.indexOf("Ivanov"); 		// находит только первого Иванова, далее останавливает поиск
party.lastIndexOf("Ivanov");	// поиск "с конца"
// если будет третий Иванов посередине, он не будет найден

// получить список всех ключей определенного объекта
var user = {
	name: "Kate",
	age: 25
}
var keys = Object.keys(user);		// поддерживается везде, кроме IE8-
keys.indexOf("name") !== -1;		// = true; поиск определенного ключа - есть или нет 
'name' in user;						// есть ли ключ в объекте

// ФУНКЦИИ = кусок повторяемого кода
function doSmth () {
	console.log("do something");
	var a = 10;
	a += 20;
	console.log("The work result is:" + a);
}
doSmth;			// вызывать функцию

function sayHi(name) {
	// var name = "Kate"
	console.log("Hello, " + name);
}
sayHi();
sayHi("Kate");

// то, что функция возвращает, можно записать в к-н переменную
// если в функции нет return, то функция возвращает Undefined
function sum (a, b) {
	return a + b 		// после return выходит из функции , аналог break
}
var result = sum

// переменные внутри функции не видны снаружи

// в функции желательно иметь только один return!!!

// Практика:
var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {	
	console.log(arr[i]);
}

// написать функцию, которая будет принимать два параметра : масиив, искомое число в массиве (существует ли это число в массиве)
// эмулировать IndexOf
var MyArr = [1, 3, 5, 7, 15];
function FindInArr(arr, element) {	
	var found = -1;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === element) {
			found = i;
			break;
		}
	}
	return found;
}
var found = FindInArr(MyArr, 7);
console.log(found);


// Home1: написать функцию, эмулирующую поведение встроенной ф-ции массивов lastIndexOf
// Home2: Написать ф-цию, эмулирующую поведение встроенной ф-ции массивов reverse
var MyArr = [1, 3, 5, 7, 15];
function reverse(arr) {
	var result = [];
	for (var i = arr.length - 1; i == 0; i--) {
		result.push(arr[i]);
		
	}
	return result;
}
var NewMyArr = reverse(MyArr);
console.log(NewMyArr);
// Home3: Написать ф-цию, которая принимает массив и число, возвращает массив всех найденных элементов, которые кратны данному числу. (Только из чисел)