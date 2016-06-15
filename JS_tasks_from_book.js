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