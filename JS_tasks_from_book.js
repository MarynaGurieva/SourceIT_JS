// Task

var Login = prompt("Please, enter the login:","");
if (Login === null) {
	alert("The entrance was cancelled");
} else if (Login === "Admin") {
	var Password = prompt("Please, enter the password:","");
	if (Password === null) {
		alert("The entrance was cancelled");
	} else if (Password === "Black king") {
		alert("Welcome!");
	} else {
		alert("The password is incorrect");
	}
} else {
	alert("You are not identified");
}

// Перепишите if с использованием оператора '?':
var a = 2,
	b = 3;
var result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}	

result = (a + b < 4) ? "Мало" : "Много";

// Перепишите if..else с использованием нескольких операторов '?'.
var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

var message = prompt("Enter the Login:","");
message = (login == 'Вася') ? 'Привет' :
	(login == 'Директор') ? 'Здравствуйте' :
		(login == '') ? 'Нет логина' : 
		'';

// какой результат будет у выражений ниже
"" + 1 + 0		// 10
"" - 1 + 0		// -1
true + false	// !!! =1
6 / "3"			// 2
"2" * "3"		// 6
4 + 5 + "px"	// 9px
"$" + 4 + 5		// $45
"4" - 2			// 2
"4px" - 2		// !!! = NaN
7 / 0			// Infinity
"  -9\n" + 5	// '  -9\n5'
"  -9\n" - 5	// -14
5 && 2			// 2
2 && 5			// 5
5 || 0			// 5
0 || 5			// 5
null + 1		// 1
undefined + 1	// !!! = NaN
null == "\n0\n"		// false
+null == +"\n0\n"	// true

// При помощи цикла for выведите чётные числа от 2 до 10.
for (var i = 2; i <=10; i++){
	if (i%2 == 0) console.log(i);
}

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (var i = 0; i < 3; i++) {
  alert( "номер " + i + "!" );
}
var i = 0;
while (i < 3) {
	alert("номер " + i + "!" );
	i++;
}


// Повторять цикл, пока ввод неверен
for (;;){
	var num = prompt("Please, enter any number more that a hundred",100);
	if (num >= 100 || num == null) break;
}

var num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);

// Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
// РЕШИТЬ!!!
for (var num = 2; num <= 10; num++){
	
}

// Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
var EnterAge = prompt("Please, enter your age:", "18");
console.log(checkAge(EnterAge));
// option #1: Используя оператор '?'
function checkAge(age) {
	(age > 18) ? true : confirm('Родители разрешили?');
  }
var EnterAge = prompt("Please, enter your age:", "18");
console.log(checkAge(EnterAge));
// option #2: Используя оператор ||
function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?');
}
var EnterAge = prompt("Please, enter your age:", "18");
console.log(checkAge(EnterAge));

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b
var Num1 = prompt("Please, enter the first number:");
var Num2 = prompt("Please, enter the second number:");
var MinValue = findMIN (Num1, Num2);
function findMIN (a, b) {
	var min = a;
	if (a > b) {
		min = b;
	}
	return min;
}
console.log(MinValue);

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
var NumX = prompt("Please, enter the x number:");
do {
	var NumN = prompt("Please, enter the n number:");
} while (NumN < 1 || (NumN ^ 0) != NumN);

var powValue = pow (NumX, NumN);
function pow (x, n) {
	var y = x;
	for (var i = 1; i < n; i++) {
		x *= y;
	}
	return x;
}
console.log(powValue);


/*Задача из 5 шагов-строк:
Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».*/
var styles = ["Jazz", "Blues"];
styles.push("Rock`n`roll");
console.log(styles);
styles.splice(-2, 1, "Classic");
console.log(styles);
alert(styles.shift(0));
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);


/*Напишите код для вывода alert случайного значения из массива:
P.S. Код для генерации случайного целого от min to max включительно:
var rand = min + Math.floor(Math.random() * (max + 1 - min));*/
var arr = ["apple", "orange", "pear", "lemon"];
var rand = 0 + Math.floor(Math.random() * ((arr.length - 1) + 1 - 0));
alert(arr[rand]);


/*Создайте калькулятор для введённых значений
Напишите код, который:
Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива*/
var arr = [];
var sum = 0;
for (var i = 0;; i++) {
	var num = prompt("Please, enter any number:");
	if (num === null || num === "" || isNaN(num)) break	// 
	arr[i] = +num;
	sum += +num;
}
console.log(arr);
console.log(sum);


/*Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.*/
var myArr = ["test", 1.5, 3, 9, 5, 45];
function find(arr, value) {
	var index = -1;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			index = i;
			break;
		}
	}
	return index;
}
var myFind = find(myArr, 1.5);
console.log(myFind);
//  определить find по-разному в зависимости от поддержки браузером метода indexOf:
// создаем пустой массив и проверяем поддерживается ли indexOf
if ([].indexOf) {
  var find = function(array, value) {
    return array.indexOf(value);
  }
} else {
  var find = function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }
    return -1;
  }
}


// Фильтр диапазона
/*Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, 
который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. 
Функция не должна менять arr*/
var myArr = [0, 2, 5, 7, 15, 3, 8, 101, 75, -4];
function filterRange(arr, a, b) {
	var arr1 =[];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= a && arr[i] <= b) {
			arr1.push(arr[i]);
		}
	}
	return arr1;
}
var newArr = filterRange(myArr, 5, 15);
console.log(newArr);


// РЕШИТЬ!!!
// Решето Эратосфена
/*Реализуйте «Решето Эратосфена» в JavaScript, используя массив.
Найдите все простые числа до 100 и выведите их сумму.*/
//Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:
/*Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
Пусть p=2, это первое простое число.
Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
Поменять значение p на первое не зачеркнутое число после p.
Повторить шаги 3-4 пока p2 < n.
Все оставшиеся не зачеркнутыми числа – простые.*/
var arr = [];
for (var i = 0; i < 100; i++) {
	arr[i] = i + 1;
}
console.log(arr);
for (var i = 0; i < arr.length; i++) {

}

for (var p = arr[1]; p * p < 100; p = arr[1]) {
	for (var i = 0; i < arr.length; i++) {
		if ( arr[i] % ((i + 2) * p) === 0) {
			arr.splice(i, 1);
		}
	}
}
console.log(arr);


// Напишите if..else, соответствующий следующему switch:
var browser = "IE";
switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

var browser = "IE";
if (browser === "IE") {
	alert ('О, да у вас IE!');
} else if (browser === 'Chrome' 
	|| browser === 'Firefox' 
	|| browser === 'Safari'
	|| browser === 'Opera') {
	alert( 'Да, и эти браузеры мы поддерживаем' );
} else {
	alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}


// Перепишите код с использованием одной конструкции switch:
var a = +prompt('a?', '');
if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}
if (a == 2 || a == 3) {
  alert( '2,3' );
}

var a = +prompt('a?', '');
switch (a) {
	case 0:
		alert(0);
		break;
	case 1:
		alert(1);
		break;
	case 2:
	case 3:
		alert("2,3");
		break;
}

/*Задан одномерный массив чисел. Напишите функцию, которая возвращает кол-во отрицательных элементов.*/
var myArr = [1, -3, 0, -45, 6, -0.8, 100, -24];
function negativeElements (arr) {
	var elements = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			elements += 1;
		}
	}
	return elements;
}
var negativeElementsArr = negativeElements (myArr);
console.log(negativeElementsArr);



