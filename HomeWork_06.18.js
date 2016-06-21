// Home1: написать функцию, эмулирующую поведение встроенной ф-ции массивов lastIndexOf
var MyArr = [1, 8, 25, 73, 8];
function FindInArr(arr, element) {	
	var found = -1;
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === element) {
			found = i;
			break;
		}
	}
	return found;
}
var found = FindInArr(MyArr, 8);
console.log(found);


// Home2: Написать ф-цию, эмулирующую поведение встроенной ф-ции массивов reverse
var MyArr = [1, 3, 5, 7, 15, "apple", "sun"];
function reverse(arr) {
	var result = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		result.push(arr[i]);
	}
	return result;
}
var NewMyArr = reverse(MyArr);
console.log(NewMyArr);


// Home3: Написать ф-цию, которая принимает массив и число, возвращает массив всех найденных элементов, которые кратны данному числу. (Только из чисел)
var MyArr = [1, "cat", 5, 7, 75, 15, 21, 90, "orange", "sun"];
function multipleOfNum (arr, x) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % x === 0) {
			result.push(arr[i]);
		}
	}
	return result;
}
var NewMyArr = multipleOfNum(MyArr, 5);
console.log(NewMyArr);