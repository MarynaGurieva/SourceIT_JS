// Окружение: DOM, BOM и JS
/*
DOM - объектная модель документа
window - во главе всего (window.object)
BOM - объектная модель браузера
*/

window.navigator		// это объект, нужен для идентификации нашего браузера
navigator.geolocation	// Объект, который отвечает за местоположение пользователя
// два способа определения геолокации: 1). с согласия пользователя; 2). запрос с сервера (без спроса)
// у него есть свойство (асинхронный метод)
navigator.geolocation.getCurrentPosition(function(data) {
	console.log(data)
});						// Geoposition {coords: Coordinates, timestamp: 1470479491852}
// можно определить только город и всё

timestamp: 1470479491852
new Date(1470479491852);		// Sat Aug 06 2016 13:31:31 GMT+0300 (Финляндия (лето))

// когда необходимо учитывать размеры браузера
window.screen;		// Screen {availWidth: 247, availHeight: 370, width: 247, height: 370, colorDepth: 24…}

// можно анализировать где находимся, и с помощью JS перенаправлять пользователя в другие "места"
window.location;		// Location {hash: "", search: "", pathname: "/browser-environment", port: "", hostname: "learn.javascript.ru"…}
// Переход таким образом - это обычный get запрос
window.location.href = "https://google.com";

// iframe технология - тег, который внутри одного окна открывает другое/ многие сайты запрещают это

// история браузера, пользователю доступна только история внутри одного хоста
// нельзя получить доступ к списку посещенных страниц (security)
window.history;
history.back();		// с помощью JS "нажимаешь" кнопки вперёд-назад
history.Forward();

window.XMLHttpRequest;		// объект для создания синхронных запросов между клиентом и сервером
// без перзагрузки страницы AJAX

// node type (всего 12)
document			// #document (# это узел)
document.body		// быстрый доступ к body
document.body.style		// JS "на лету" добавляет стиль элементу (в верстке такое неприемлемо)
var elem = document.body;
elem.style.backgroundColor = "#ff0"			// дефиз заменяется на камел кейс
// это до перезагрузки странички

console.dir(elem);

// null - если не был найден элемент в DOM
// $0 это получить в консоль элемент (что выделено)
// четыре уровня - это история: $1, $2, $3, $4

// Навигация по DOM-элементам
// дочерний элемент - это вложенный в родительский
// скрипты размещать последними элементами перд </body>, иначе не пройдет HTML-валидацию

// смоттреть "условный комментарий"

// ДЗ создать табличку 10х10 и попробовать все методы "Особые ссылки для таблиц"

// получить элемент - через селект (метод document)
document.getElementById("wrapper");				// возвращает один элемент
document.getElementsByTegName("span");				// много элементов будут возвращены псевдомассивом (смотреть через console.dir())
document.getElementByClassName("title");	
document.getElementsByName("");			// у формы
document.querySelector(".title");		// всегда возвращает коллекцию в виде массива, если не найдено - пустой массив
document.querySelectorAll(".title");	