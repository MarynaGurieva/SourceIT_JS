// События
// не через название вытягивать ID, а находить и записывать в переменную, потом работать с переменной
// делегирование событие- обработчик событий можно повесить на родителя, и он будет отрабатывать на всех вложенных элементах
// проверка через tagName - если button - тогда отрабатывать события
// свойство currentTarget - то же самое, что this. Тот элемент, на котором сработало событие

// проверка для IE:
event = event || window.event;
var target = event.target || event.scrElement;

// clientX, clientY, offsetX, offsetY
// пофиксить код на Dropbox`e

var btn = document.querySelector('.content .btn');
var check = document.querySelector('input[type=checkbox]');
check.onclick = function(event) {
  console.log(event.target);
};
 
 
var buttonsHolder = document.getElementsByClassName('buttons-holder')[0];
var ball = buttonsHolder.querySelector('button');
 
var ballRect = ball.getBoundingClientRect();
var holderRect = buttonsHolder.getBoundingClientRect();
console.log(holderRect);
 
var dimensions = {
  leftBorder: holderRect.left,
  topBorder: holderRect.top
};
dimensions.rightBorder = dimensions.leftBorder + dimensions.width;
dimensions.bottomBorder = dimensions.topBorder + dimensions.height;
 
console.log(dimensions);
 
buttonsHolder.addEventListener('click', function(e) {
  var halfHight = ballRect.height / 2;
  var halfWidth = ballRect.width / 2;
  ball.style.top = e.clientY - halfHight + 'px';
  ball.style.left = e.clientX - halfWidth + 'px';
 
  if (e.clientY - halfHight < dimensions.topBorder) {
    ball.style.top = dimensions.topBorder + 'px';
  }
  if (e.clientX - halfWidth < dimensions.leftBorder) {
    ball.style.left = dimensions.leftBorder + 'px';
  }
  if (e.clientX + halfWidth > dimensions.rightBorder) {
    ball.style.left = dimensions.rightBorder - ballRect.width + 'px';
  }
  if (e.clientY + halfHight > dimensions.bottomBorder) {
    ball.style.top = dimensions.bottomBorder - ballRect.height + 'px';
  }
 
});
 
 
 
var a = document.querySelector('a');
a.onclick = function(event) {
  console.log(event);
  event.preventDefault();
};