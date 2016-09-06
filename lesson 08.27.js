window.onload = function() {

	var rand = function(min, max) {
		min = min || 0;
		max = max || 1;
		return Math.floor((Math.random() * (max - min) + 0))
	};

	function getRandomColor() {
	    var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	};

	function getRandomColorRGB() {
		var rgb = [];
		for (var i = 0; i < 3; i ++) {
			rgb.push(rand(0, 255));
		};
		return 'rgb(' + rgb +')';
	}

	var table = drawTable();
	var config = processTable(table);
	animate(config, 30);

	function drawTable() {
		var table = document.createElement('table');

		for (var i = 0; i < 10; i++) {
			var tr = document.createElement("tr");
			for (var j = 0; j < 10; j++) {
				var td = document.createElement("td");
				td.textContent = rand(0, 100);
				td.style.backgroundColor = getRandomColorRGB();		// or use getRandomColor
	// сделать инверсивный цвет фона - цвету цифр
				//td.style.position = 'absolute';
				tr.appendChild(td);
			};
			table.appendChild(tr);
		};

		document.body.appendChild(table);

		table.style.position = 'absolute';
		table.style.top =  window.innerHeight / 2 - rect.height / 2 + 'px';
		table.style.left =  window.innerWidth / 2 - rect.width / 2 + 'px';

		var rect = table.getBoundingClientRect();
		console.log(rect);
		table.style.marginLeft = - rect.width / 2 + 'px';
		table.style.marginTop = - rect.height / 2 + 'px';
	};

	function processTable(t) {
		var config = [];
		var tds = t.getElementsByTagName('td');
		for (var i = 0; i < tds.length; i++) {
			config.push({
				top: tds[i].offsetTop,
				left:tds[i].offsetLeft,
				td: tds[i]
			});
		};
		for (i = 0; i < config.length; i++) {
			config[i].td.style.position = 'absolute';
			config[i].td.style.top = config[i].top +'px';
			config[i].td.style.left = config[i].left +'px';
		}
		return config;
	};

	function animate(config, delay) {
		setInterval( function() {

		}, delay)
	};

};

/*HOMETASKS -
1) Написать ф-цию, которая умеет принимать цвет (либо массив rgb) и создает для этого цвета инверсивный цвет.
пример - белый - черный
2) Для взрывающейся таблицы - когда конкретная ячейка уходит за границы экрана, нужно останавливать анимацию для этой ячейки
3) Когда все ячейки покинут видимую часть страницы, остановить интервал.*/