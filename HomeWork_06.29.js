// ДЗ #1
/*Функция pow(x,n)
Напишите функцию pow(x,n), которая возвращает x в степени n. 
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.*/
var NumX = prompt("Please, enter the x number:");
do {
	var NumN = prompt("Please, enter the n number:");
} while (NumN < 1 || (NumN ^ 0) != NumN);

function pow (x, n) {
	var y = x;
	for (var i = 1; i < n; i++) {
		x *= y;
	}
	return x;
}
var powValue = pow (NumX, NumN);
console.log(powValue);


// ДЗ #2 обойти двухмерный массив по змейке
function snake(arr) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		var string = arr[i].slice();
		if (i % 2 !== 0) {
			string.reverse();
		}
		result = result.concat(string);
	} 
	return result;
}

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
var r = snake(matrix);
console.log('snake', r);		// snake [1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13]


// ДЗ #3 обойти двухмерный массив по спирали внутрь
function spiral(arr) {
	var result = [];

	var z = 0;				// z = i строка в середине массива (центр)
	if (arr.length % 2 !== 0) {
		z = ~~(arr.length/2);
	} else {z = arr.length/2 - 1}

	for (var i = 0; i <= z; i++) {
		
		var apex = arr[i].slice();
		apex.splice(0, i);
		apex.splice(-i, i);
		var bottom = arr[arr.length - i - 1].slice().reverse();
		bottom.splice(0, i);
		bottom.splice(-i, i);

		var right = [];
		var left = [];
		for (var j = i + 1; j < arr.length - i - 1; j++) {
    		right.push( arr[j][arr[j].length - i - 1] );
    		left.push( arr[j][i] );
		}
		left.reverse();

		if (i == z && arr.length % 2 !== 0) {
			result = result.concat(apex, right, left);
			break;
		}
		result = result.concat(apex, right, bottom, left);
	}
	return result;
}

var matrix = [
  [1, 2, 3, 4, 0],
  [5, 6, 7, 8, -1],
  [9, 10, 11, 12, 0],
  [13, 14, 15, 16, -1],
  [17, 18, 19, 20, 0]
];

var r = spiral(matrix);
console.log('spiral', r);
// spiral [1, 2, 3, 4, 0, -1, 0, -1, 0, 20, 19, 18, 17, 13, 9, 5, 6, 7, 8, 12, 16, 15, 14, 10, 11]