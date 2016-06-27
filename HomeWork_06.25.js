// ДЗ №1:
/*Обойти двумерных массив по периметру, т.е. вернуть плоский массив, состоящий из элементов, 
лежащих на гранях двумерного массива в строко определенном порядке: начало обхода 0-0, двигаться по часовой стрелке*/
function perimeter(arr) {
  var result = [];
 
  var top = arr[0].slice();
  var bottom = arr[arr.length - 1].slice().reverse();
 
  var right = [];
  var left = [];
  /* finding right and left */
  for (var i = 1; i < arr.length - 1; i++) {
    right.push( arr[i][arr[i].length - 1] );
    left.push( arr[i][0] );
    // left.unshift( arr[i][0] );
  }
  left.reverse();
 
  result = top.concat(right, bottom, left);
 
  return result;
}

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
var r = perimeter(matrix);
console.log('perimeter', r);		// perimeter [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5]
 

// ДЗ №2:
/*ДЗ2 === ДЗ1 + reverse()
вернуть периметр массива ПРОТИВ часовой стрелки)*/
function perimeter(arr) {
  var result = [];
 
  var top = arr[0].slice();
  var bottom = arr[arr.length - 1].slice().reverse();
 
  var right = [];
  var left = [];

  for (var i = 1; i < arr.length - 1; i++) {
    right.push( arr[i][arr[i].length - 1] );
    left.push( arr[i][0] );
  }
  left.reverse();
 
  result = top.concat(right, bottom, left);
 
  return result;
}

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
var r = perimeter(matrix).reverse();
var firstElement = r.pop();
r.unshift(firstElement);
console.log('perimeter', r);		// perimeter [1, 5, 9, 13, 14, 15, 16, 12, 8, 4, 3, 2]
// r.push( r.shift() );
// r.reverse();


// ДЗ №3:
/*Обойти массив по верхней грани, правой грани и главной диагонали (по часовой стрелке)*/
function trigon(arr) {
	var result = [];
 	var top = arr[0].slice();

	var right = [];
	for (var i = 1; i < arr.length; i++) {
    	right.push( arr[i][arr[i].length - 1] );
	}
 
	var diagonal = [];		// здесь - главная диагональ - только для массива, у которого i=j
	for (var i = 1; i < arr.length - 1; i++) {
		var j = i;
		diagonal.push( arr[i][j] );
	}
	diagonal.reverse();

	result = top.concat(right, diagonal);
	return result;
}

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
var r = trigon(matrix);
console.log('trigon', r);		// trigon [1, 2, 3, 4, 8, 12, 16, 11, 6]


// ДЗ №4:
/*ДЗ4 === ДЗ3 (только диагональ - побочная)*/
/*Обойти массив по верхней грани, побочной диагонали и левой грани (по часовой стрелке)*/
function trigon2(arr) {
	var result = []; 
	var top = arr[0].slice();

	var diagonal2 = [];		// здесь - побочная диагональ - только для массива, у которого i=j
	for (var j = arr.length - 2; j >= 0; j--) {
		var i = arr.length - 1 - j;
		diagonal2.push( arr[i][j] );
	}

	var left = [];
	for (var i = 1; i < arr.length - 1; i++) {
    	left.push( arr[i][0] );
	}
	left.reverse();
 
	result = top.concat(diagonal2, left);
 
	return result;
}

var matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
var r = trigon2(matrix);
console.log('trigon2', r);		// trigon2 [1, 2, 3, 4, 7, 10, 13, 9, 5]



// PREVIOUS HOMETASKS:

// Случайное значение:
function randomInteger(min, max) {
  return Math.floor( min + Math.random() * (max + 1 - min) );
}

/*1) Используя ф-цию выше (randomInteger) создать одномерный массив на 10 элементов. вывести его в консоль*/
function randomInteger(min, max) {
  return Math.floor( min + Math.random() * (max + 1 - min) );
}
var min = +prompt("Please, set a minimum number in an array", 0);
do {
	var max = +prompt("Please, set a maximum number in an array", 100);
} while (max < min);
var arr = [];
for (var i = 0; i < 10; i++) {
	var element = randomInteger(min, max);
	arr.push(element);
}
console.log(arr);


/*2) пункт 1 офорить в виде ф-ции, которая будет принимать размер будущего массива и возвращать этот массив (return resultArr)*/
function randomInteger(min, max) {
  return Math.floor( min + Math.random() * (max + 1 - min) );
}
function arrSize (size) {
	var arr = [];
	for (var i = 0; i < size; i++) {
		arr.push(randomInteger(min, max));
	}
	return arr;
}
var mySize = +prompt("Please, set a size of a new array:", 10);
var newArr = arrSize (mySize);
console.log(mySize);
console.log(newArr);


/*3) сделать аналогичную ф-цию, которая будет  принимать аргумент size (один и для ширины и для высоты массива) и возвращать двухмерный массив*/
function randomInteger(min, max) {
  return Math.floor( min + Math.random() * (max + 1 - min) );
}

var min = +prompt("Please, set a minimum number in an array", 0);
do {
	var max = +prompt("Please, set a maximum number in an array", 100);
} while (max < min);

function arrSize (size) {
	var arr = [];
	for (var i = 0; i < size; i++) {
		var innerArr = [];
		for (var j = 0; j < size; j++) {
			innerArr.push(randomInteger(min, max));
		}
		arr.push(innerArr);	
	}
	return arr;
}

var mySize = +prompt("Please, set a size (width & height) of a new array:", 10);
var newArr = arrSize (mySize);
console.log(mySize);
console.table(newArr);


// new example:
function flatArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      result.push( arr[i][j] );
    }
  }
  return result;
}
