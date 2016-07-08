// округления
Math.floor(1.4);		// "обрезать" дробную часть
Math.round(1.9);		// математическое округление
Math.ceil(1.2);			// округлить до большего

// самовызывающаяся функция = без создания переменной; функция будет объявлена и вызвана
function hello() {
	console.log("hello =)");
}
hello();

// самовызывающаяся функция (функция с вызовом на месте) - чтобы скрыть переменные
(function () {
	console.log("hello =)");
}) ();
// не сможем вызвать повторна, т.к. у функции нет имени; вызывается один раз
(function (name) {
	console.log("hello =)" + name);
}) ("Vasya");

var shooters = [];
for (var i = 0; i < 10; i++) {
	shooters.push( function() {
		console.log(i);
	});
}					// = 10 (т.к. i = 10)
shooters[9]();		// = 10, bug

// обойти bug -
var shooters = [];
for (var i = 0; i < 10; i++) {
	
	var fn = (function(index) {		// в fn записывается function (); index = i
		return function () {
			console.log(index);
		}
	}) (i);

	shooters.push(fn);	
}
shooters[0];		// function () {console.log(index);}
shooters[9]();		// 9
shooters[5]();		// 5

var shooters = [];
for (var i = 0; i < 10; i++) {
	
	function getFunc(index) {		
		return function () {
			console.log(index);
		}
	}
	shooters[i] = getFunc(i);
}

// выполнять код с задержкой
function executeMe () {
	console.log("I`m executed");
}
setTimeout(executeMe, 3000);		// функция задержки на 3 секунды
// возвращает id
// Задержка в милисекундах, 1000 милисекунд равны 1 секунде.
setTimeout(executeMe, 30000);
clearTimeout(6);					// останавливает задержку, аргумент id задержки
// стандартная запись
setTimeout (function() {
	console.log("I`m executed");
}, 3000);

setInterval(executeMe, 1000);		// возвращает id
// запускает выполнение функции не один раз, а регулярно повторяет её через указанный интервал времени
var timerId = setInterval(executeMe, 1000);	
clearInterval(timerId);

// разобрать время
// ДЗ написать "часики"
console.clear();		// получать раз в секунду время (часы, минуты, секунды), объединить и вывести

+new Date();	// 1467456694194
var date = 1467456694194;
var d = new Date(date * 1000);

// Бомба
var seconds = 10;
var tId = setInterval(function() {
	console.log(--seconds);
	if (seconds <= 0) {
		console.log("Booom!")
		clearInterval(tId);
	}
}, 1000)
// Не отсчитывают точное время, а зависят от работы процессора

// По стандарту, минимальная задержка составляет 4 мс. Так что нет разницы между setTimeout(..,1) и setTimeout(..,4). 
// 40 милисекунд = оптимальное соотношение производительности и "плавности"

// Замыкания через  setTimeout. задача - пофиксить багу
for (var i = 0; i < 10; i++) {
	setTimeout( function () {
		console.log(i);
	}, 1000);
}

var shooters = [];
for (var i = 0; i < 10; i++) {
   shooters[i] = (function(index) {
      return function () {
         console.log(index);
      };
   })(i);
}
console.log( shooters[5]() );

// решение
for (var i = 0; i < 10; i++) {

   (function(index) {

     setTimeout(function() {
        console.log(index);
     }, 1000);

   })(i);

}

// в ECMA Script 6
for (let i = 0; i < 10; i++) {
	setTimeout( function () {
		console.log(i);
	}, 1000 * i + 1);
}

// Рекурсия:
// функция вызывает саму себя
function pow(x, n) {
  if (n > 1) { 
    var result = x * pow(x, n - 1);
    return result;
  } else {
    return x;
  }
}
var result = pow(2,3);

debugger; // смотреть что происходит, погружение внуть F11
// F8 прекратить debugger
// стек выполнения функции

// дерево = объект, у которого неизвестна вложенность
// с помощью рекурсии обойти дерево
var person = {
   name: 'Vasyly',
   surname: 'Petroff',
   age: 69,
   children: [
      {
       name: 'Ivan',
       surname: 'Petroff',
       age: 39,
       children: [
         {
          name: 'Masha',
          surname: 'Petroff',
          age: 16
         }
       ]
      },
      {
       name: 'Sidor',
       surname: 'Petroff',
       age: 35,
       children: [
         {
          name: 'Vova',
          surname: 'Petroff',
          age: 10
         },
         {
          name: 'Vasya',
          surname: 'Petroff',
          age: 13
         }
       ]
      }
   ]
};
// получить, например, массив всех имен
var result = [];
function findRecursive(obj) {
	for (var key in obj) {
		if (key == "name") {
			result.push(obj[key]);
		} else if (typeof obj[key] == "object") {
			findRecursive(obj[key]);
		}
	}
}
findRecursive(person);
console.log(result);			// ["Vasyly", "Ivan", "Masha", "Sidor", "Vova", "Vasya"]

var result = [];
function findRecursive(obj) {
	for (var key in obj) {
		if (key == "age" && obj[key] > 18) {
			result.push(obj[key]);
		} else if (typeof obj[key] == "object") {
			findRecursive(obj[key]);
		}
	}
}
findRecursive(person);
console.log(result);			// [69, 39, 35]

var result = [];
function findRecursive(obj) {
	for (var key in obj) {
		if (key == "age" && obj[key] > 18) {
			result.push(obj["name"]);
		} else if (typeof obj[key] == "object") {
			findRecursive(obj[key]);
		}
	}
}
findRecursive(person);
console.log(result);			// ["Vasyly", "Ivan", "Sidor"]