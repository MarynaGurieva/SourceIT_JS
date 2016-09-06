setTimeout( function() {
	var list = document.querySelector('.list');

	for (var i = 0; i < 100; i++) {
		var li = document.createElement('li');
		li.textContent = i + 5;
		list.appendChild(li);
	}
}, 1000);

setTimeout( function() {
	var list = document.querySelector('.list');
	var frag = document.createDocumentFragment();		// document fragment node #11

	for (var i = 0; i < 100; i++) {
		var li = document.createElement('li');
		li.textContent = i + 5;
		frag.appendChild(li);
	}

	list.appendChild(frag);
	console.log(frag);

	list.style.backgroundColor = 'white';		// приоритетность: JS приоритетнее, поскольку выполняется позже
}, 1000);

// getComputedStyle

window.onload = function() {		// пока не загрузится DOM
	var list = document.querySelector('.list');
	var frag = document.createDocumentFragment();		// document fragment node #11

	for (var i = 0; i < 100; i++) {
		var li = document.createElement('li');
		li.textContent = i + 5;
		frag.appendChild(li);
	}

	list.appendChild(frag);
	console.log(frag);

	list.style.backgroundColor = 'white';
	var listStyles = getComputedStyle(list);
	console.log(listStyles);		// цвет в формате rgba()- надо парсить
};


// читать раздел "Документ и объекты страницы"

// мультивставка insertAdjacent*

// События
// DOMContentLoaded - грузит каркас HTML, в отличие от window.onload

var elem = document.querySelector('.square');
var st = getComputedStyle(elem);
var width = parseFloat(st.width);
var height = parseFloat(st.height);
elem.style.width = width * 2 + 'px';
elem.style.height = height * 2 + 'px';

var elem = document.querySelector('.square');
// первым кликом увеличивать размер в 2 раза, вторым - уменьшать
var counter = 0;
var isIncrease = true;
elem.onclick = function() {		// обработчик событий; есть this - указывает на элемент, на который кликнули
	counter++;
	if (counter >= 5) {
		this.onclick = null;		// убрали обработчик событий
	};
	var style = getComputedStyle(this);
	this.style.width = isIncrease ? parseFloat(style.width) * 2 + 'px' : parseFloat(style.width) / 2 + 'px';
	this.style.height = isIncrease ? parseFloat(style.height) * 2 + 'px' : parseFloat(style.height) / 2 + 'px';
	isIncrease = !isIncrease;
};

// инлайновые onclick - не использовать, пропускать у Кантора

elem.addEventListener('click', function() {...})		// навешать много функций, которые выполняются все
// снять обработчик событий - вторым аргументом указать эту же функцию
var handler = function() {
	console.log("the 2nd");
};
elem.addEventListener('click', handler);			// максимально использовать в проектах
elem.removeEventListener('click', handler);			// через Function Expression

var counter = 0;
var isIncrease = true;
var handler = function() {		// обработчик событий; есть this - указывает на элемент, на который кликнули
	counter++;
	if (counter >= 5) {
		this.removeEventListener('click', handler);
	};
	var style = getComputedStyle(this);
	this.style.width = isIncrease ? parseFloat(style.width) * 2 + 'px' : parseFloat(style.width) / 2 + 'px';
	this.style.height = isIncrease ? parseFloat(style.height) * 2 + 'px' : parseFloat(style.height) / 2 + 'px';
	isIncrease = !isIncrease;
};