// Создать JSом таблицу 10х10, заполнить ее случайными числами (или цветами)

var table = document.createElement("table");
document.body.insertBefore(table, document.body.firstChild);

var caption = document.createElement("caption");
table.appendChild(caption);
var rowsQ = +prompt("Please, enter the number of table rows", 10);
var columnsQ = +prompt("Please, enter the number of table columns", 10);
caption.textContent = "Table " + rowsQ + "x" + columnsQ + " with random numbers inside";

var tbody = document.createElement("tbody");
table.appendChild(tbody);

for (var i = 0; i < rowsQ; i++) {
	var tr = document.createElement("tr");
	tbody.appendChild(tr);
	for (var j = 0; j < columnsQ; j++) {
		var td = document.createElement("td");
		tr.appendChild(td);
		td.textContent = ~~(Math.random(100)*100);
		td.style.backgroundColor = getRandomColor();
	};
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};