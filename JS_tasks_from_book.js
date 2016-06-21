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
