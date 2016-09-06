window.onload = function() {
 
  //Задача: сгенерировать двумерный массив случайнфх чисел от 0 до 100
  //размер 10 на 10
  //вывести в документ соержимое этого массива в виде таблицы table, используя DOM
  var timer;
  var table = drawTable();
  var config = processTable(table);
 
  function rand(min, max) {
    min = min || 0;
    max = max || 1;
    return Math.floor((Math.random() * (max - min) + 0.5) + min);
  }
 
  function getRandomColor() {
    var rgb = [];
    for (var i = 0; i < 3; i++) {
      rgb.push(rand(0, 255));
    }
    return 'rgb(' + rgb + ')';
  }
 
  function drawTable() {
    var button = document.createElement('button');
    button.textContent = 'Большая синяя кнопка!';
    button.style.backgroundColor = '#0F0';
    document.body.appendChild(button);
    button.addEventListener('click', function() {
      if (!timer) {
        animate(config, 50);
      } else {
        clearInterval(timer);
        timer = null;
      }
    });
 
    var table = document.createElement('table');
 
    for (var i = 0; i < 10; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 10; j++) {
        var td = document.createElement('td');
        td.textContent = rand(0, 99);
        td.style.backgroundColor = getRandomColor();
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
 
    document.body.appendChild(table);
 
    var rect = table.getBoundingClientRect();
 
    table.style.position = 'absolute';
    table.style.top =  window.innerHeight / 2 - rect.height / 2 + 'px';
    table.style.left =  window.innerWidth / 2 - rect.width / 2 + 'px';
    return table;
  }
 
  function processTable(t) {
    var config = [];
    var tds = t.getElementsByTagName('td');
    for (var i = 0; i < tds.length; i++) {
      config.push({
        top: tds[i].offsetTop,
        left: tds[i].offsetLeft,
        td: tds[i]
      });
      do {
        config[i].dirLeft = rand(-1, 1);
        config[i].dirTop = rand(-1, 1);
      } while (!config[i].dirLeft && !config[i].dirTop);
    }
    console.table(config);
    for (i = 0; i < config.length; i++) {
      config[i].td.style.position = 'absolute';
      config[i].td.style.top = config[i].top + 'px';
      config[i].td.style.left = config[i].left + 'px';
    }
    return config;
  }
 
  function animate(config, delay) {
    timer = setInterval(function() {
      for (var i = 0; i < config.length; i++) {
        // if (если моя ячейка находится внутри экрана, т.е. видима) {
          config[i].td.style.top = parseFloat(config[i].td.style.top) + (config[i].dirTop * rand(1, 3)) + 'px';
          config[i].td.style.left = parseFloat(config[i].td.style.left) + (config[i].dirLeft * rand(1, 3)) + 'px';
        // }
      }
    }, delay);
  }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  // //подсветить строку, в которой хоть один элемент равен 0;
 
  // var tds = table.getElementsByTagName('td');
 
  // for (var i in tds) {
  //   if (tds[i].innerHTML == 0) {
  //     tds[i].parentNode.style['font-weight'] = 'bold';
  //     tds[i].parentNode.style.color = 'red';
  //   }
  // }
 
  // /*---------------------Разместить  таблицу по центру окна----------------------*/
  // table.style.position = 'absolute';
  // table.style.left = (document.documentElement.clientWidth / 2) - (table.clientWidth / 2) + 'px';
  // table.style.top = (document.documentElement.clientHeight / 2) - (table.clientHeight / 2) + 'px';
 
 
 
  // /*---------------------Взорвать ячейки таблицы---------------------*/
  // var obj_conf = [];
 
  // //tds - массив всех ячеек таблицы, полученный ранее
  // for (var i = 0; i < tds.length; i++) {
  //   var td_conf = { //создаем объект, который будет описывать одну конкретную td
  //     td: tds[i] //помещаем в объект саму td
  //       ,
  //     moveTop: !!rand() // рандомно задаем направление движения будущего взрыва - по вертикали
  //       ,
  //     moveLeft: !!rand() //  рандомно задаем направление движения будущего взрыва - по горизонтали
  //       //"!!" - приведение к булевому типу
  //       ,
  //     src_top: tds[i].offsetTop //помещаем в объект координату ячейки внутри таблицы - вертикальную
  //       ,
  //     src_left: tds[i].offsetLeft //помещаем в объект координату ячейки внутри таблицы - горизонтальную
 
  //     // , direction:  rand(0, 7) //направление движения
  //   }
  //   obj_conf.push(td_conf); //пушим объекты в массив в цикле
  // }
 
  // for (var i in obj_conf) { //перебираем массив объектов td_conf
  //   var td_conf = obj_conf[i];
  //   td_conf.td.style.position = 'absolute';
  //   td_conf.td.style.top = td_conf.src_top + 'px';
  //   td_conf.td.style.left = td_conf.src_left + 'px';
  // }
 
  // setInterval(function() {
  //   for (var i in obj_conf) {
  //     var td_conf = obj_conf[i];
  //     if (td_conf.moveLeft) {
  //       td_conf.td.style.left = td_conf.td.offsetLeft + 1 + 'px'; //если left = true, то двигаем вправо
  //     } else {
  //       td_conf.td.style.left = td_conf.td.offsetLeft - 1 + 'px'; ////если left = false, то двигаем влево
  //     }
  //     if (td_conf.moveTop) {
  //       td_conf.td.style.top = td_conf.td.offsetTop + 1 + 'px'; //если top = true, то двигаем вниз
  //     } else {
  //       td_conf.td.style.top = td_conf.td.offsetTop - 1 + 'px'; //если top = false, то двигаем вверх
  //     }
  //   }
  // }, 100);
};