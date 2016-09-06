/*HOMETASKS -
ПЕРВОЕ задание

создать json файл - массив с объектами, напр. товары, 5-10 штук.
получить этот файл методом гет и вывести содержимое на странице

ВТОРОЕ задание

1) добавить на страницу инпут, в который можно вводить имя города
2) добавить кнопку OK, которая будет к имеющейся урле http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=
конкатенировать введенный нами город
затем отправлять запрос в формате JSONP (не забываем добавлять в урл callback=ourCallbackFunction)
3) при получении ответа ваша задача вывести листинги на страницу в формате -
имя
картинка
цена*/

var ajax = new XMLHttpRequest();
console.log(ajax.readyState);
 
ajax.open('GET', './_public/dummy.json', true);
console.log(ajax.readyState);
 
ajax.setRequestHeader('X-Auth', 'avada-kedavra');
 
ajax.send();
console.log(ajax.readyState);
 
ajax.onreadystatechange = function() {
  if (ajax.readyState === 4) {
      console.log(ajax.responseText);
      try {
          var data = JSON.parse(ajax.responseText);
          renderData(data);
      } catch (err) {
          console.error(err);
      }
  }
};
 
function renderData(data) {
}
 
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
 
var script = document.createElement('script');
script.src = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=London&callback=mySuperFunction';
 
var head = document.querySelector('head');
head.appendChild(script);
 
function mySuperFunction(data) {
    console.log(data);
}

/* create file "dummy.json":
[
    {
        "name": "Вася",
        "surname": "Лошадкин"
    },{
        "name": "Петя",
        "surname": "Пуговкин"
    }
]*/