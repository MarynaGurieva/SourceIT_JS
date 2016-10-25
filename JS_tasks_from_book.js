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

// Проверка существования детей
/*Придумайте самый короткий код для проверки, пуст ли элемент elem.
«Пустой» – значит нет дочерних узлов, даже текстовых.*/
if (elem.childNodes[0] == null) { 
	console.log("узел elem пуст") 
} else {
	console.log(elem.childNodes[0])
};

// Выделите ячейки по диагонали
/*Напишите код, который выделит все ячейки в таблице по диагонали.*/
// в переменной td DOM-элемент для тега <td>
for (var i = 0; i < table.rows.length; i++) {
	table.rows[i].cells[i].style.backgroundColor = 'red';
}


// Поиск элементов
// Ниже находится документ с таблицей и формой.
// Найдите (получите в переменную) в нём:
//* Все элементы label внутри таблицы. Должно быть 3 элемента.
var table = document.getElementById('age-table');
console.log(table.querySelectorAll('label'));
//* Первую ячейку таблицы (со словом "Возраст").
console.log(table.rows[0].cells[0]);
//* Вторую форму в документе.
var forms = document.querySelectorAll('form');
forms[1];
//* Форму с именем search, без использования её позиции в документе.
for (var i = 0; i < forms.length; i++) {
	if (forms[i].name == 'search') {
		var fs = forms[i];
		console.log(fs);
	}
}
document.querySelector('form[name="search"]');
//* Элемент input в форме с именем search. Если их несколько, то нужен первый.
fs.getElementsByTagName('input')[0];
fs.querySelector('input');
document.querySelector('form[name="search"] input')
//* Элемент с именем info[0], без точного знания его позиции в документе.
document.getElementsByName('info[0]');
document.getElementsByName("info[0]")[0];
//* Элемент с именем info[0], внутри формы с именем search-person.
document.querySelector('form[name="search-person"] [name="info[0]"]');


// Дерево
// Есть дерево из тегов <ul>/<li>.
//Напишите код, который для каждого элемента <li> выведет:
//*Текст непосредственно в нём (без подразделов).
//*Количество вложенных в него элементов <li> – всех, с учётом вложенных.
var arr = document.querySelectorAll('li');
arr.forEach(function(entry) {
	console.log(entry.innerHTML);
});
arr.length;
var arrUl = document.querySelectorAll('ul');
arrUl.forEach(function(entry) {
	var num = entry.querySelectorAll('li').length;
	console.log("ul" +" has " + num + " li-elements");
});


// Бенчмаркинг методов поиска в DOM
/*Какой метод поиска элементов работает быстрее: getElementsByTagName(tag) или querySelectorAll(tag)?
Напишите код, который измеряет разницу между ними.*/
function bench(func, times) {
	var d = new Date();
	for (var i = 0; i < times; i++) {
		func();
	};
	return new Date() - d;
};
function selectByTagName() {
	var elems = document.getElementsByTagName('li');
	var len = elems.length;
	for (var i = 0; i < len; i++) {
		var elem = elems[i];
	};
};
function selectSelectorAll() {
	var elems = document.querySelectorAll('li');
	var len = elems.length;
	for (var i = 0; i < len; i++) {
		var elem = elems[i];
	};
};
console.log("getElementsByTagName: " + bench(selectByTagName, 5000))
console.log("querySelectorAll: " + bench(selectSelectorAll, 5000))


// Получить второй LI
/*Есть длинный список ul.
Как наиболее эффективно получить второй LI?*/
var arrUl = document.querySelectorAll('ul');
arrUl.forEach(function(entry) {
	var elems = entry.getElementsByTagName('li');
	console.log(elems[1]);
});

// Полифилл для matches
/*Метод elem.matches(css) в некоторых старых браузерах поддерживается под старым именем matchesSelector или с префиксами, 
то есть: webkitMatchesSelector (старый Chrome, Safari), mozMatchesSelector (старый Firefox) или 
Element.prototype.msMatchesSelector (старый IE).
Создайте полифилл, который гарантирует стандартный синтаксис elem.matches(css) для всех браузеров.*/
(function() {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.atcgesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;

		};
	};
})();

// Полифилл для closest
/*Метод elem.closest(css) для поиска ближайшего родителя, удовлетворяющего селектору css, 
не поддерживается некоторыми браузерами, например IE11-.
Создайте для него полифилл.*/
(function() {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function(css) {
			var elem = this;
			while (elem) {
				if (elem.matches(css)) return elem;
				else elem = elem.parentElement;
			};
			return null;
		};
	};
})();


// Полифилл для textContent
/*Свойство textContent не поддерживается IE8. Однако, там есть свойство innerText.
Создаёте полифилл, который проверяет поддержку свойства textContent, и если её нет – создаёт его, используя innerText. 
Получится, что в IE8 «новое» свойство textContent будет «псевдонимом» для innerText.
Хотя свойство innerText и работает по-иному, нежели textContent, но в некоторых ситуациях они могут быть взаимозаменимы. 
Именно на них направлен полифилл.*/
(function() {
	if (document.documentElement.textContent === undefined) {
		Object.defineProperty(HTMLElement.prototype, "textContent", {
			set: function(value) {
				this.innerText = value;
			},
			get: function() {
				return this.innerText;
			}
		});
	};
})();


// Получите пользовательский атрибут
/*Получите div в переменную.
Получите значение атрибута "data-widget-name" в переменную.
Выведите его.*/
//<body>
//  <div id="widget" data-widget-name="menu">Выберите жанр</div>
//<script>
	var elem = document.getElementById('widget');
	console.log('elem variable: ');
	console.log(elem);
	var name = elem.dataset.widgetName;
	console.log('data-widget-name: ');
	console.log(name);
//</script>
//</body>


// Поставьте класс ссылкам
/*Сделайте желтыми внешние ссылки, добавив им класс external.
Все ссылки без href, без протокола и начинающиеся с http://internal.com считаются внутренними.*/
		var links = document.getElementsByTagName('a');
		console.log(links);
		for (var i = 0; i < links.length; i++) {
			if (links[i].hasAttribute('href')) {
				var text = links[i].getAttribute('href');
				if (text.indexOf('://') + 1) {
					if (text.indexOf('http://internal.com') + 1) continue;
					var ok = links[i].className = 'external';
					console.log('external link: ' + links[i].textContent);
				}
			}
		}


// Удаление элементов
/*Напишите полифилл для метода remove для старых браузеров.
Вызов elem.remove():
- Если у elem нет родителя – ничего не делает.
- Если есть – удаляет элемент из родителя.*/
var elem = list.firstElementChild;
;(function() {
	if (!Element.prototype.remove) {
		Element.prototype.remove = function remove() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
				console.log('element has been deleted')
			} else {
				console.log('this element doesn\'t have a parent');
			};
		}
	}
})();


// ertAfter
/*Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.*/
var elem = document.createElement('div');
elem.innerHTML = '<b>Element #5</b>';
function insertAfter(elem, refElem) {
  	refElem.parentNode.insertBefore(elem, refElem.nextElementSibling);
}
var body = insAfter;
 		// вставить elem после первого элемента
insertAfter(elem, body.firstElementChild); // <--- должно работать
  		// вставить elem за последним элементом
insertAfter(elem, body.lastElementChild); // <--- должно работать

// removeChildren
/*Напишите функцию removeChildren, которая удаляет всех потомков элемента.*/
function removeChildren(elem) {
  while (elem.lastChild) {
    elem.removeChild(elem.lastChild);
  }
	console.log('Element nas been cleared');
}
removeChildren(table); // очищает таблицу
removeChildren(ol); // очищает список



//Вставьте элементы в конец списка
/*Напишите код для вставки текста html в конец списка ul с использованием метода insertAdjacentHTML. 
Такая вставка, в отличие от присвоения innerHTML+=, не будет перезаписывать текущее содержимое.
Добавьте к списку ниже элементы <li>3</li><li>4</li><li>5</li>:*/
// create two points of the exist list
var ul = document.createElement('ul');
for (var i = 0; i < 2; i++) {
	var li = document.createElement("li");
	li.innerHTML = i + 1;
	ul.appendChild(li);
};
document.body.appendChild(ul);
// add new three elements to the list
ul.insertAdjacentHTML('beforeEnd', "<li>3</li><li>4</li><li>5</li>");


// Отсортировать таблицу
/*Есть таблица.
Строк в таблице много: может быть 20, 50, 100… Есть и другие элементы в документе.
Как бы вы предложили отсортировать содержимое таблицы по полю Возраст? Обдумайте алгоритм, реализуйте его.
Как сделать, чтобы сортировка работала как можно быстрее? А если в таблице 10000 строк (бывает и такое)?
P.S. Может ли здесь помочь DocumentFragment?
P.P.S. Если предположить, что у нас заранее есть массив данных для таблицы в JavaScript – что быстрее: 
отсортировать эту таблицу или сгенерировать новую*/
// create a table
var table = document.createElement('table');
table.setAttribute('id', 'table');
var thead = document.createElement('thead');
var trH = document.createElement('tr');
thead.appendChild(trH);
for (var i = 0; i < 3; i++) {
	var th = document.createElement('th');
	th.setAttribute('scope', 'col');
	if (i + 1 == 1) th.innerHTML = "First Name";
	if (i + 1 == 2) th.innerHTML = "Last Name";
	if (i + 1 == 3) th.innerHTML = "Age";
	trH.appendChild(th);
};
table.appendChild(thead);
var tbody = document.createElement('tbody');
for (var i = 0; i < 5; i++) {
	var trB = document.createElement('tr');
	for (var j = 0; j < 3; j++) {
		var td = document.createElement('td');
		if (j + 1 == 1) td.innerHTML = "Ivanov";
		if (j + 1 == 2) td.innerHTML = "Peter";
		if (j == 2 && i == 0) td.innerHTML = "25";
		if (j == 2 && i == 1) td.innerHTML = "45";
		if (j == 2 && i == 2) td.innerHTML = "18";
		if (j == 2 && i == 3) td.innerHTML = "50";
		if (j == 2 && i == 4) td.innerHTML = "45";
		trB.appendChild(td);
	};
	tbody.appendChild(trB);
};
table.appendChild(tbody);
document.body.appendChild(table);
// sort over the age
function compareAge(elementA, elementB) {
	return elementA.age - elementB.age;
};
var fragment = document.createDocumentFragment();
var tbodySort = tbody.cloneNode(false);
var arrRows = [];
var numR = table.children[1].children.length;
for (var k = 0; k < numR; k++) {
	var objRow = {};
	objRow.index = k;
	objRow.content = table.children[1].children[k].cloneNode(true);
	objRow.age = +table.children[1].children[k].children[2].innerText;
	arrRows.push(objRow);
	console.log(objRow);
};
arrRows.sort(compareAge);
console.log(arrRows);
for (var z = 0; z < numR; z++) {
	tbodySort.appendChild(arrRows[z].content);
};
fragment.appendChild(tbodySort);
table.removeChild(tbody);
table.appendChild(fragment);


// Создать список
/*Напишите интерфейс для создания списка.
Для каждого пункта:
Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте пункт и добавляйте его к UL.
Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.
Все элементы должны создаваться динамически.
Если посетитель вводит теги – пусть в списке они показываются как обычный текст.*/
var list = document.createElement('ul');
list.setAttribute('id', "ulList") 
userList.appendChild(list);
while (true) {
	var elemList = prompt("Enter the data:", "no data");
	if (elemList === null || elemList === '') break;
	var newLi = document.createElement('li');
	ulList.appendChild(newLi);
	newLi.innerText = elemList;	
};


// Создайте дерево из объекта
/*Напишите функцию, которая создаёт вложенный список UL/LI (дерево) из объекта.
Варианты:
-- Создать строку, а затем присвоить через container.innerHTML.
-- Создавать узлы через методы DOM.
P.S. Желательно, чтобы в дереве не было лишних элементов, в частности – пустых <ul></ul> на нижнем уровне.*/
var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {},
    "Карась": 5
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {},
      "Сосна": 1
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};
var container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);
var parent = container;
var createTree = function(container, data) {
	if (Object.keys(data).length == 0) return;
	var dataList = document.createElement('ul');
	parent.appendChild(dataList);
	for (var key in data) {
		parent = dataList;
		var point = document.createElement('li');
		point.innerHTML = key;
		parent.appendChild(point);
		if (data[key] instanceof Object) {
			parent = point;
			createTree(container, data[key]);
		};
	};
};
createTree(container, data);

// Дерево
/*Есть дерево, организованное в виде вложенных списков <ul>/<li>.
Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. 
Узлы нижнего уровня, без детей – пропускайте.*/
var arrLi = container.querySelectorAll('li');
arrLi.forEach( function(data) {
	var number = data.getElementsByTagName('li').length;
	data.setAttribute('numChildren', number);
});
arrLi.forEach( function(data) {
	if (+data.getAttribute('numChildren') !== 0) {
		var text = data.firstChild.data;
		var number = +data.getAttribute('numChildren');
		data.firstChild.data = text + ' [' + number + ']'; 
	};
});


// Создать календарь в виде таблицы
/*Напишите функцию, которая умеет генерировать календарь для заданной пары (месяц, год).
Календарь должен быть таблицей, где каждый день – это TD. У таблицы должен быть заголовок с названиями дней недели, каждый день – TH.
Синтаксис: createCalendar(id, year, month).
Такой вызов должен генерировать текст для календаря месяца month в году year, а затем помещать его внутрь элемента с указанным id.*/
function createCalendar(id, year, month) {
	var calendar = document.createElement('div');
	calendar.setAttribute('id', 'id');
// create table with week days:
	var tableMonth = document.createElement('table');
	tableMonth.setAttribute('id', 'newTable');
	var tHead = document.createElement('thead');
	var tHeadTR = document.createElement('tr');
	var tHeadTR1 = document.createElement('th');
	tHeadTR1.setAttribute('scope', 'col');
	tHeadTR1.innerHTML = 'Mon';
	tHeadTR.appendChild(tHeadTR1);
	var tHeadTR2 = document.createElement('th');
	tHeadTR2.setAttribute('scope', 'col');
	tHeadTR2.innerHTML = 'Tue';
	tHeadTR.appendChild(tHeadTR2);
	var tHeadTR3 = document.createElement('th');
	tHeadTR3.setAttribute('scope', 'col');
	tHeadTR3.innerHTML = 'Wed';
	tHeadTR.appendChild(tHeadTR3);
	var tHeadTR4 = document.createElement('th');
	tHeadTR4.setAttribute('scope', 'col');
	tHeadTR4.innerHTML = 'Thu';
	tHeadTR.appendChild(tHeadTR4);
	var tHeadTR5 = document.createElement('th');
	tHeadTR5.setAttribute('scope', 'col');
	tHeadTR5.innerHTML = 'Fri';
	tHeadTR.appendChild(tHeadTR5);
	var tHeadTR6 = document.createElement('th');
	tHeadTR6.setAttribute('scope', 'col');
	tHeadTR6.innerHTML = 'Sat';
	tHeadTR.appendChild(tHeadTR6);
	var tHeadTR7 = document.createElement('th');
	tHeadTR7.setAttribute('scope', 'col');
	tHeadTR7.innerHTML = 'Sun';
	tHeadTR.appendChild(tHeadTR7);
	tHead.appendChild(tHeadTR);
	tableMonth.appendChild(tHead);
// get all attributes for the calendar:
	var date = new Date(year, month - 1);
	var weekDay = date.getDay();
	var nextMonth = new Date(year, month);
	var daysInMonth = nextMonth.getDate(nextMonth.setDate(0));
	var numberWeeks = Math.ceil((daysInMonth + weekDay - 1) / 7);
// create and fill the calendar:
	var tBody = document.createElement('tbody');
	var counter = 1;
	for (var i = 0; i < numberWeeks; i++) {
		var tr = document.createElement('tr');
		var end = counter + 7;
		for (var j = counter; j < end; j++) {
			if ((i == 0 && j < weekDay) || j > daysInMonth) {
				var td = document.createElement('td');
				tr.appendChild(td);
			} else {
				var td = document.createElement('td');
				td.innerHTML = counter;
				tr.appendChild(td);
				counter += 1;
			};
		};
		tBody.appendChild(tr);
	};
	tableMonth.appendChild(tBody);
	calendar.appendChild(tableMonth);
	document.body.appendChild(calendar);
};
createCalendar('calendar', 2016, 09);
/*Для решения задачи сгенерируем таблицу в виде строки: "<table>...</table>", а затем присвоим в innerHTML.
Алгоритм:
* Создать объект даты d = new Date(year, month-1). Это первый день месяца month (с учетом того, что месяцы в JS начинаются от 0, а не от 1).
* Ячейки первого ряда пустые от начала и до дня недели d.getDay(), с которого начинается месяц. Создадим их.
* Увеличиваем день в d на единицу: d.setDate(d.getDate()+1), и добавляем в календарь очередную ячейку, пока не достигли следующего месяца.
При этом последний день недели означает вставку перевода строки «</tr><tr>».
* При необходимости, если календарь окончился не на воскресенье – добавить пустые TD в таблицу, чтобы было все ровно.*/


// Часики с использованием "setInterval"
/*Создайте цветные часики*/
var timer = document.createElement('section');
document.body.insertBefore(timer, document.body.firstElementChild);
var block1 = document.createElement('div');
block1.setAttribute('id', 'hour');
var block2 = document.createElement('div');
block2.setAttribute('id', 'minute');
var block3 = document.createElement('div');
block3.setAttribute('id', 'second');
timer.appendChild(block1);
timer.appendChild(block2);
timer.appendChild(block3);
function getCurrentTime() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if (hours < 10) {
		hour.innerHTML = '0' + hours + ':';
	} else {
		hour.innerHTML = hours + ':';
	};
	if (minutes < 10) {
		minute.innerHTML = '0' + minutes + ':';
	} else {
		minute.innerHTML = minutes + ':';
	};
	if (seconds < 10) {
		second.innerHTML = '0' + seconds + ':';
	} else {
		second.innerHTML = seconds + ':';
	};
};
var timerId = setInterval(getCurrentTime, 1000);
clearInterval(timerId);


// Скругленая кнопка со стилями из JavaScript
/*Создайте кнопку в виде элемента <a> с заданным стилем, используя JavaScript.
В примере ниже такая кнопка создана при помощи HTML/CSS. В вашем решении кнопка должна создаваться, 
настраиваться и добавляться в документ при помощи только JavaScript, без тегов <style> и <a>.*/
/*<style>
  .button {
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    border: 2px groove green;
    display: block;
    height: 30px;
    line-height: 30px;
    width: 100px;
    text-decoration: none;
    text-align: center;
    color: red;
    font-weight: bold;
  }
</style>
<a class="button" href="/">Нажми меня</a>*/

var buttonOnClock = document.createElement('a');
buttonOnClock.setAttribute('class', 'button');
buttonOnClock.setAttribute('href', '/');
buttonOnClock.innerHTML = "Start Clock";
var parentElement = document.body.getElementsByClassName('clockButtons')[0];
parentElement.appendChild(buttonOnClock);
buttonOnClock.style.cssText = "-moz-border-radius: 8px;\
    -webkit-border-radius: 8px;\
    border-radius: 8px;\
    border: 2px groove green;\
    display: block;\
    height: 30px;\
    line-height: 30px;\
    width: 100px;\
    text-decoration: none;\
    text-align: center;\
    color: red;\
    font-weight: bold;";


// Создать уведомление
/*Напишите функцию showNotification(options), которая показывает уведомление, пропадающее через 1.5 сек.
Описание функции:
 * Показывает уведомление, пропадающее через 1.5 сек
 * @param options.top {number} вертикальный отступ, в px
 * @param options.right {number} правый отступ, в px
 * @param options.cssText {string} строка стиля
 * @param options.className {string} CSS-класс
 * @param options.html {string} HTML-текст для показа*/

function showNotification(options) {
	var elem = document.createElement('section');
	elem.setAttribute('class', options.className);
	elem.innerHTML = options.html;
	if (options.cssText) {
		elem.style.cssText = options.cssText;
	};
	elem.style.display = 'block';
	elem.style.cssFloat = 'right';
	elem.style.marginTop = (options.top || 0) + 'px';
	elem.style.marginRight = (options.right || 0) + 'px';
	document.body.insertBefore(elem, document.body.firstChild);
// hide the element:
	setTimeout( function() {
		document.body.removeChild(elem);
	}, 1500);
};
// покажет элемент с текстом "Hello!" и классом welcome справа-сверху окна
showNotification({
  top: 10,
  right: 10,
  html: "Hello!",
  className: "welcome"
});


// Найти размер прокрутки снизу
/*Свойство elem.scrollTop содержит размер прокрученной области при отсчете сверху. А как подсчитать размер прокрутки снизу?
Напишите соответствующее выражение для произвольного элемента elem.
Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать ноль.*/
var elem = document.querySelector('div[class="AgileManifesto"]');
var scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
console.log(scrollBottom);


// Узнать ширину полосы прокрутки
/*Напишите код, который возвращает ширину стандартной полосы прокрутки.
Именно самой полосы, где ползунок. Обычно она равна 16px, в редких и мобильных браузерах может колебаться от 14px до 18px, 
а кое-где даже равна 0px.
P.S. Ваш код должен работать на любом HTML-документе, независимо от его содержимого.*/
var elem = document.querySelector('div[class="AgileManifesto"]');
var scrollWidth = elem.offsetWidth - elem.clientWidth - 2 * elem.clientLeft;		// 17


// Подменить div на другой с таким же размером
var div = document.getElementById('moving-div');
div.style.position = 'absolute';
div.style.right = div.style.top = 0;
var styles = getComputedStyle(div);
var div2 = div.cloneNode(false);
div2.style.position = '';
div2.style.borderColor = 'silver';
div2.style.backgroundColor = 'silver';
div2.style.height = styles.height;
document.body.insertBefore(div2, div.nextSibling);


// Поместите мяч в центр поля
/*Используйте JavaScript, чтобы поместить мяч в центр.
Менять CSS нельзя, мяч должен переносить в центр ваш скрипт, через установку нужных стилей элемента.
JavaScript-код должен работать при разных размерах мяча (10, 20, 30 пикселей) без изменений.
JavaScript-код должен работать при различных размерах и местоположениях поля на странице без изменений. 
Также он не должен зависеть от ширины рамки поля border.
P.S. Да, центрирование можно сделать при помощи чистого CSS, но задача именно на JavaScript. 
Далее будут другие темы и более сложные ситуации, когда JavaScript будет уже точно необходим, это – своего рода «разминка».*/
		var ballWidth = ball.offsetWidth;
		var ballHeight = ball.offsetHeight;
		var fieldWidth = field.clientWidth;
		var fieldHeight = field.clientHeight;
		ball.style.left = fieldWidth / 2 - ballWidth / 2 + 'px';
		ball.style.top = fieldHeight / 2 - ballHeight / 2 + 'px';
		var ballStyles = getComputedStyle(ball);
		console.log('ball size: ' + ballWidth + "x" + ballHeight);
		console.log('field size: ' + fieldWidth + "x" + fieldHeight);
		if (ballStyles.right === ballStyles.left) {
			console.log("from the left and the right field sides: " + ballStyles.right);
		} else {
			console.log("from the left field side: " +  ballStyles.left);
			console.log("from the right field side: " +  ballStyles.right);
		};
		if (ballStyles.top === ballStyles.bottom) {
			console.log("from the top and the bottom field sides: " + ballStyles.top);
		} else {
			console.log("from the top field side: " +  ballStyles.top);
			console.log("from the bottom field side: " +  ballStyles.bottom);
		};

// Расширить элемент
/*В <body> есть элемент <div> с заданной шириной width.
Задача – написать код, который «распахнет» <div> по ширине на всю страницу.
Исходный документ (<div> содержит текст и прокрутку).
P.S. Пользоваться следует исключительно средствами JS, CSS в этой задаче менять нельзя. 
Также ваш код должен быть универсален и не ломаться, если цифры в CSS станут другими.
P.P.S. При расширении элемент <div> не должен вылезти за границу <body>.*/
var bodyWidth = parseInt(getComputedStyle(bodyEl).width);
var elemStyles = getComputedStyle(elem);
var elemBorder = parseInt(elemStyles.borderRightWidth) + parseInt(elemStyles.borderLeftWidth);
var elemMargin = parseInt(elemStyles.marginLeft) + parseInt(elemStyles.marginRight);
var elemPadding = parseInt(elemStyles.paddingLeft) + parseInt(elemStyles.paddingRight);
var newWidth = bodyWidth - (elemBorder + elemMargin + elemPadding);
elem.style.width = newWidth + 'px';


//Найдите координаты точки в документе
/*При помощи JavaScript найдите координаты указанных стрелками углов относительно окна браузера.
Для тестирования в документ добавлено удобство: клик в любом месте отображает координаты мыши относительно окна.
Ваш код должен при помощи DOM получить четыре пары координат:
Левый-верхний угол снаружи, это просто.
Правый-нижний угол снаружи, это тоже просто.
Левый-верхний угол внутри, это чуть сложнее.
Правый-нижний угол внутри, это ещё сложнее, но можно сделать даже несколькими способами.
Они должны совпадать с координатами, которые вы получите кликом по полю.
P.S. Код не должен быть как-то привязан к конкретным размерам элемента, стилям, наличию или отсутствию рамки.*/
	var field = document.getElementById('field');
	var fieldCoords = field.getBoundingClientRect();
// the 1st counter:
	console.log('the 1st point: top=' + fieldCoords.top + ', left=' + fieldCoords.left + ';');
// the 3rd counter:
	var topX = fieldCoords.top + field.clientTop;
	var left = fieldCoords.left + field.clientLeft;
	console.log('the 3nd point: top=' + topX + ', left=' + left + ';');
// the 4th counter:
	var topX = topX + field.clientHeight;
	var left = left + field.clientWidth;
	console.log('the 4nd point: top=' + topX + ', left=' + left + ';');
// the 2nd counter:
	var topX = fieldCoords.top + field.offsetHeight;
	var left = fieldCoords.left + field.offsetWidth;
	console.log('the 2nd point: top=' + topX + ', left=' + left);


// Разместить заметку рядом с элементом
/*Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem, в зависимости от position, 
сверху ("top"), справа ("right") или снизу ("bottom") от элемента anchor.
Используйте её, чтобы сделать функцию showNote(anchor, position, html), 
которая показывает элемент с классом note и текстом html на позиции position рядом с элементом anchor.*/
		var quo = document.createElement('blockquote');
		quo.setAttribute('id', 'barto');
		quo.innerHTML = "МИШКА<br>Уронили мишку на пол,<br>Оторвали мишке лапу.<br>Все равно его не брошу —<br>Потому что он хороший.<br><i>Агния Барто «Стихи детям»</i>";
		var nextSibling = document.body.getElementsByTagName('script')[0];
		document.body.insertBefore(quo, nextSibling);
		var elem = document.createElement('div');
		elem.setAttribute('id', 'note');
		elem.style.position = 'fixed';
		elem.innerHTML = "note";
		document.body.appendChild(elem);
		function positionAt(anchor, position, elem) {
			var anchCoords = anchor.getBoundingClientRect();
			if (position == 'top') {
				elem.style.top = anchCoords.top - elem.offsetHeight + 'px';
				elem.style.left = anchCoords.left + 'px';
			} else if (position == "right") {
				elem.style.top = anchCoords.top + 'px';
				elem.style.left = anchCoords.left + anchor.offsetWidth + 'px';
			} else {
				elem.style.top = anchCoords.top + anchor.offsetHeight + 'px';
				elem.style.left = anchCoords.left + 'px';
			};
		};
positionAt(barto, 'right', elem);
positionAt(barto, 'top', elem);
positionAt(barto, 'bottom', elem);
	function showNote(anchor, position, html) {
		positionAt(anchor, position, note);
		elem.innerHTML = html;
	};
showNote(barto, 'right', 'the new user note');


// Область видимости для документа
/*Напишите функцию getDocumentScroll(), которая возвращает объект с информацией о текущей прокрутке и области видимости.
Свойства объекта-результата:
top – координата верхней границы видимой части (относительно документа).
bottom – координата нижней границы видимой части (относительно документа).
height – полная высота документа, включая прокрутку.
В этой задаче учитываем только вертикальную прокрутку: горизонтальная делается аналогично, а нужна сильно реже.*/
function getDocumentScroll() {
	var obj = {};
	var scrLengthView = window.pageYOffset || document.documentElement.scrollTop;		// viewed length of scroll;
	obj.top = scrLengthView;
	var docHeight = document.body.getBoundingClientRect().height;								// height of the document visual part
	obj.bottom = docHeight + scrLengthView;
	var scrLengthAll = Math.max(
	    document.body.scrollHeight, document.documentElement.scrollHeight,
	    document.body.offsetHeight, document.documentElement.offsetHeight,
	    document.body.clientHeight, document.documentElement.clientHeight
	);
	document.body.scrollHeight;							// full length of scroll;										
	obj.height = scrLengthAll;
	return obj;
};
getDocumentScroll();


// 
