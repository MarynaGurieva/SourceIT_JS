
	// получить <label for="user-name">Name</label>
	var label = document.querySelector("label[for="user-name"]");		// проверить почему не работает!!!
	console.log(label);

	label.innerHTML = "User name";
	label.innerHTML = '';

	// innerHTML может принимать текст и теги
	label[0].innerHTML = "<h2>What is your name?<\h2>";

	label.innerText = '<h1>Hello!<\h1>'				// экранирует; не поддерживается firefox

	
rows[0].classList;		// возвращает массив из классов; не кроссбраузерный метод
// методы classList - см Кантора
rows[0].classList.contains('row');		// true, false
// добавление - удаление класса:
rows[0].classList.add('new');
rows[0].classList.remove('new');
rows[0].classList.toggle('new');		// если нет такого класса - добавит, если был - убрать
// полезно для открывания-закрывания меню

label.hasAttribute("for");		// true, false
label.hasAttribute("name");
label.getAttribute("for");
label.setAttribute("class", "mega-super-holder");
label.removeAttribute("class");

label.attributes;		// псевдомассив атрибутов

var input = querySelector
input.value;		// то, что пользователь "наклацал" в окошке
// placeholder не отражается тут
input.dataset;
input.dataset.userToken;
// дефизы заменяются на CamelCase

label.setAttribute("blabla", "777");
input;
input.blabla;		// undefined, т.к. атрибут не нативный, а кастомный (только не для IE)
input.name = "444";


// создать элемент:
var div = document.createElement("div");		// createElement работает только на уровне document
div.textContent = "Hello!";
div.classList.add("message-holder");
// поместить куда-то:  wrapper - родитель
wrap.appendChild(div);		// в переменную wrap
var h2 = document.createElement("h2");
h2.textContent = "Hi!";
wrap.appendChild(h2);		// всегда дописывается в конец родителя

var parentElement = document.querySelectorAll('.super-row.desabled');
var nextSibling = document.querySelectorAll('.super-row.desabled')[1];
parentElement.insertBefore(h2, nextSibling);		// nextSibling - Тот элемент, перед которым будет размещён h2

// Создать JSом таблицу 10х10, заполнить ее случайными числами(или цветами)
/*создали элемент, написали цикл и вложенный цикл*/
// см http://stackoverflow.com/