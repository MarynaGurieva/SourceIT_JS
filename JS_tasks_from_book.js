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


/*Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n.
Сделайте три варианта решения:
1). С использованием цикла.
2). Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
3). С использованием формулы для суммы арифметической прогрессии.*/
// #1
var n = +prompt("Please, enter the n:", 5);
var sum = 0;
for (i = 1; i <= n; i++) {
	sum += i;
}
console.log(sum);

// #2
function sumTo (n) {
	if (n != 1) {
		return n + sumTo (n - 1);
	} else {
		return n;
	}
}
var n = +prompt("Please, enter the n:", 5);
var sum = sumTo (n);
console.log(sum);

// #3
var n = +prompt("Please, enter the n:", 5);
var sum = (1 + (1 + (n - 1) * 1)) * n / 2;
console.log(sum);


/*Вычислить факториал
Факториа́л числа – это число, умноженное на «себя минус один», затем на «себя минус два» и так далее, до единицы. Обозначается n
Задача – написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.
Подсказка: обратите внимание, что n! можно записать как n * (n-1)!.*/
var n = +prompt("Please, enter the n:", 5);
function factorial(n) {
	if (n!= 1) {
		return n * factorial(n - 1);
	} else {
		return n;
	}
}
var myFactorial = factorial(n);
console.log(myFactorial);


/*Числа Фибоначчи
Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.*/

// option #1
var n = +prompt("Please, enter the n:", 5);
function fib(n) {
	var el1 = 1;
	var el2 = 1;
	for (var i = 3; i <= n; i++) {
		el2 = el1 + el2;
		el1 = el2 - el1;
	}
	return el2;
}
var myFib = fib(n);
console.log(myFib);

// option #2
var n = +prompt("Please, enter the n:", 5);
function fib(n) {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
var myFib = fib(n);
console.log(myFib);


// Вопросник по преобразованиям, для объектов
new Date(0) - 0				// 0
/*new Date(0) – дата, созданная по миллисекундам и соответствующая 0 мс от 1 января 1970 года 00:00:00 UTC. 
Оператор минус - преобразует дату обратно в число миллисекунд, то есть в 0.*/
new Array(1)[0] + ""		// "undefined"
/*new Array(num) при вызове с единственным аргументом-числом создаёт массив данной длины, без элементов. 
Поэтому его нулевой элемент равен undefined, при сложении со строкой получается строка "undefined".*/
({})[0]						// undefined
/*Фигурные скобки – это создание пустого объекта, у него нет свойства '0'. Так что значением будет undefined. 
Обратите внимание на внешние, круглые скобки. 
Если их убрать и запустить {}[0] в отладочной консоли браузера – будет 0, т.к. скобки {} будут восприняты как пустой блок кода, после которого идёт массив.*/
[1] + 1						// "11"
[1,2] + [3,4]				// "1,23,4"
[] + null + 1				// "null1"
[[0]][0][0]					// 0
/*[[0]] – это вложенный массив [0] внутри внешнего [ ]. Затем мы берём от него нулевой элемент, и потом еще раз.*/
/*Квадратные скобки после массива/объекта обозначают не другой массив, а взятие элемента.*/
({} + {})					// "[object Object][object Object]" 
/*Каждый объект преобразуется к примитиву. 
У встроенных объектов Object нет подходящего valueOf, поэтому используется toString, 
так что складываются в итоге строковые представления объектов.*/


//Сумма произвольного количества скобок
// Напишите функцию sum, которая будет работать так:
/*sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15*/
// Количество скобок может быть любым.
var arr = [];
do {
	var k = prompt("Please, enter the number of an array:", 1);
	if (isNumeric(k)) {
		arr.push(+k);
	};
} while (isNumeric(k));
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};
console.log(arr);
//debugger;
function sum(i) {
	var result = i;
	function f(j) {
		result += j;
		return f;
	};
	f.toString = function() {
		return result;
	};
	return f;
 };


// Сумма через замыкание
// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
var a = +prompt("Enter the number a:", 1);
var b = +prompt("Enter the number b:", 3);
debugger;
function sum(a) {
	return function(b) {
		return a + b;
	};
};
sum(a)(b);


// Создать Calculator при помощи конструктора
/*Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
1). Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
2). Метод sum() возвращает сумму запомненных свойств.
3). Метод mul() возвращает произведение запомненных свойств.*/
function Calculator() {
	var first = 0;
	var second = 0;
	this.read = function() {
		this.first = +prompt("Please, enter the first number:", 0);
		this.second = +prompt("Please, enter the second number:", 0);
	};
	this.sum = function(first, second) {
		return this.first + this.second;
	};
	this.mul = function(first, second) {
		return this.first * this.second;
	};
};

var calculator = new Calculator();
calculator.read();
console.log( "Сумма=" + calculator.sum() );
console.log( "Произведение=" + calculator.mul() );


// Создать Accumulator при помощи конструктора
/*Напишите функцию-конструктор Accumulator(startingValue). 
Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
Более формально, объект должен:
Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.*/
function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function() {
		this.value += +prompt("Please, enter the number:", 0);
	};
};

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
console.log( accumulator.value ); // выведет текущее значение


//Создайте калькулятор
/*Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
Эта задача состоит из двух частей, которые можно решать одна за другой.
1). Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», 
с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.*/
/*
2).Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. 
Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
Например, добавим операции умножить *, поделить / и возвести в степень **   */

// task #1
function Calculator() {
	var result = 0;
	this.calculate = function(value) {
		var str = value;
		if ( str.indexOf("+") != -1 ) {
			str = str.split("+");
			str[0] = +str[0].trim();
			str[1] = +str[1].trim();
			result = str[0] + str[1];
		} else if ( str.indexOf("-") != -1 ) {
			str = str.split("-");
			str[0] = +str[0].trim();
			str[1] = +str[1].trim();
			result = str[0] - str[1];
		} else {
			console.log( "Check your expression: " + str);
		};
		return result;
	};
};

var calc = new Calculator();
console.log( calc.calculate("10 + 7") );		// 17

// task #2 - option 1
function Calculator() {
	this.calculate = function(value) {
		var str = value;
		str = str.split(" ");		// array has three elements, the second one is our "name"
		var name = str[1];
		var a = +str[0].trim();
		var b = +str[2].trim();
		var result = 0;
			if (name == "*") {
				result = a * b;
			} else if (name == "/") {
				result = a / b;
			} else if (name == "**") {
				result = Math.pow(a, b);
			} else {
				result = "Check your expression: " + str;
			};
			return result;
	};
};
var powerCalc = new Calculator;
var result = powerCalc.calculate("2 ** 3");
console.log( result );

// task #2 - option 2
function Calculator() {
	var methods = {
		"+": function(a, b) {
			return a + b;
		},
		"-": function(a, b) {
			return a - b;
		},
		"*": function(a, b) {
			return a * b;
		},
		"/": function(a, b) {
			return a / b;
		},
		"**": function(a, b) {
			return Math.pow(a, b);
		},
	};
	this.calculate = function(value) {
		var str = value;
		str = str.split(" ");		// array has three elements, the second one is our "name"
		var name = str[1];
		var a = +str[0].trim();
		var b = +str[2].trim();
		if (!methods[name] || isNaN(a) || isNaN(b)) {
      		return NaN;
    	}
		return methods[name](a, b);		
		//  если имя свойства хранится в переменной, то единственный способ к нему обратиться – это квадратные скобки methods[name].
	};
};
var powerCalc = new Calculator;
var result = powerCalc.calculate("2 ** 3");
console.log( result );


// Добавить get/set-свойства
/*Код объекта User, который хранит имя и фамилию в свойстве this.fullName.
Имя и фамилия всегда разделяются пробелом.
Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись.
Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы через get/set. 
Лишнее дублирование здесь ни к чему*/

function divideString(value) {
	return value.split(" ");		// return array [firstName] [lastName]
};
function joinString(value) {
	return value.join(" ");			// return string "firstName lastName"
};

function User(fullName) {
	this.fullName = fullName;

	Object.defineProperty(this, "firstName", {
		get: function() {
			return divideString(this.fullName)[0];
		},
		set: function(value) {
			var arr = [];
			arr.push(value);
			value = divideString(this.fullName)[1];
			arr.push(value);
			this.fullName = joinString(arr);
		}
	});

	Object.defineProperty(this, "lastName", {
		get: function() {
			return divideString(this.fullName)[1];
		},
		set: function(value) {
			var arr = [];
			arr.push(value);
			value = this.firstName;		// get firstName
			arr.unshift(value);
			this.fullName = joinString(arr);
		}
	});
};

var vasya = new User("Василий Пупкин");
var kate = new User("Екатерина Иванова");
console.log(kate.firstName);	// Екатерина
console.log(vasya.lastName);	// Пупкин
kate.lastName = "Сидорова";
console.log(kate.fullName);


// Статичные и фабричные методы. Счетчик объектов
/*Добавить в конструктор Article:
Подсчёт общего количества созданных объектов.
Запоминание даты последнего созданного объекта.
Используйте для этого статические свойства.
Пусть вызов Article.showStats() выводит то и другое.*/

Article.counter = 0;
function Article() {
  this.created = new Date();
  Article.counter++;
  Article.created = this.created;
};

Article.showStats = function() {
	return console.log("Statistics: \ncounter " + Article.counter + ";\nlast created " + Article.created);
};

new Article();
new Article();
Article.showStats(); // Всего: 2, Последняя: (дата)
new Article();
Article.showStats(); // Всего: 3, Последняя: (дата)


/*Превратите объект в JSON*/
var leader = {
  name: "Василий Иванович",
  age: 35
};
var str = JSON.stringify(leader);		// "{"name":"Василий Иванович","age":35}"
str = "{"name":"Василий Иванович","age":35}"
str = JSON.parse(str);					// Object {name: "Василий Иванович", age: 35}


/*Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.*/
Function.prototype.defer = function(value) {
	return setTimeout( function() {
		f();
	}, value);
};


function f() {
  console.log( "привет" );
}

f.defer(5000); // выведет "привет" через 5 секунд

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

function f() {
  alert( "привет" );
}

// ~~~~~~~~РЕШИТЬ!!!
/*Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, 
откладывающую вызов функции на ms миллисекунд.*/
Function.prototype.defer = function(ms) {
  setTimeout(this.bind(this, a, b), ms);
};

function f(a, b) {
  console.log( a + b );
}

f.defer(5000)(1, 2); // выведет 3 через 5 секунд.


/*
Перепишите в виде класса
Есть класс CoffeeMachine, заданный в функциональном стиле.
Задача: переписать CoffeeMachine в виде класса с использованием прототипа.
Исходный код:
*/
function CoffeeMachine(power) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.run = function() {
    setTimeout(function() {
      alert( 'Кофе готов!' );
    }, getTimeToBoil());
  };

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

};


function CoffeeMachine(power) {
	// свойства конкретной кофеварки
	this._waterAmount = 0;
	this._power = power;
};
// свойства и методы для всех объектов класса
CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype.run = function() {
	setTimeout( function() {
		console.log(" Coffee is ready!")
	}, this._getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
	this._waterAmount = amount;
};

CoffeeMachine.prototype._getTimeToBoil = function() {
	return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
};


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();


// Хомяки с __proto__
/*Вы – руководитель команды, которая разрабатывает игру, хомяковую ферму. 
Один из программистов получил задание создать класс «хомяк» (англ – "Hamster").
Объекты-хомяки должны иметь массив food для хранения еды и метод found для добавления.
Ниже – его решение. При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже.
В чём дело? Как поправить?*/
function Hamster(name) {
	this._name = name;
	this._food = [];
};

// Hamster.prototype.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
  this._food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster('speedy');
var lazy = new Hamster('lazy');

speedy.found("яблоко");
speedy.found("орех");

console.log( speedy._food.length ); // 2
console.log( lazy._food.length ); // 0