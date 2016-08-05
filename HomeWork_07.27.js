// hometask
// общее свойство пробега - все лошади пробежали суммарно - также есть у каждой лошади
// реализовать методом прототипов

var totalMileage = 0;

var animal = {
	get totalMileage() {
		return totalMileage;
	},
};

function Horse(name) {
	this.name = name;
	this.__proto__ = animal;

	var mileage = +prompt("Please, enter the initial mileage of this hourse:", 0);
	totalMileage += mileage;

	Object.defineProperty (this, "mileage", {
		get: function() {
			return mileage;
		}
	});
	
	this.run = function(value) {
		mileage += value;
		totalMileage += value;
	};
};

var h1 = new Horse("the first");
h1.run(30);		// 30 km
console.log(h1.mileage);		// 30 km
console.log(h1.totalMileage);		// 30 km
var h2 = new Horse("the second");
h2.run(70);		// 30 km
console.log(h2.mileage);		// 70 km
console.log(h1.totalMileage);		// 100 km
console.log(h2.totalMileage);		// 100 km

/*Реализовать такое поведение, 
при котором при пробеге одной лошадью определенной дистанции, увеличивается также свойство общего пробега 
для всех лошадей данного класса.*/

// option #2 - base

Horse.prototype = {
	constructor: Horse.prototype.constructor,
	totalMileage: 0
}
function Horse(name) {
	this.name = name;

	var mileage = +prompt("Please, enter the initial mileage of this hourse:", 0);
	Horse.prototype.totalMileage += mileage;

	Object.defineProperty (this, "mileage", {
		get: function() {
			return mileage;
		}
	});
	
	this.run = function(value) {
		mileage += value;
		Horse.prototype.totalMileage += value;
	};
};

var h1 = new Horse("the first");		// initial 20 km
h1.run(30);		// 30 km
console.log(h1.mileage);		// 50 km
console.log(h1.totalMileage);		// 50 km
var h2 = new Horse("the second");		// initial 0 km
h2.run(70);		// 30 km
console.log(h2.mileage);		// 70 km
console.log(h1.totalMileage);		// 120 km
console.log(h2.totalMileage);		// 120 km


// Лошадки. Часть 2
/*  Добавить лошадкам свойство "усталость".
Лошадка пробегает 1 км, у нее увеличивается усталовть на единицу.
Максимальная усталость 10 единиц.
Когда лошадь достигает максимальной усталости - сделать лошадке setTimeout (например, 1 секунду) на отдых.
Усталость обнуляется.
После отдыха лошадь добегает оставшиеся километры, с учетом увеличения усталости.

рекурсивность. запускать run, когда усталость = 0.
*/

Horse.prototype = {
	constructor: Horse.prototype.constructor,
	totalMileage: 0,
};

function Horse(name) {
	this.name = name;
	this.mileage = 0;
	this.fatigue = 0;
	this._LIMIT_BEFORE_REST = 10;
};

Horse.prototype.run = function(value) {
	for (var i = 0; i < value; i++) {
		this.mileage++;
		Horse.prototype.totalMileage++;
		this.fatigue++;

		if (this.fatigue >= this._LIMIT_BEFORE_REST) {
			console.log(this.name + " horse is resting 5 seconds");

			setTimeout((function() {
				this.fatigue = 0;
				var leftToRun = value - i - 1;
				console.log(this.name + " horse has already rested. Left to run " + leftToRun + " km.");
				this.run(leftToRun);
			}).bind(this), 5000);
			break;
		};
	};
	console.log(this.name + " horse's fatigue is " + this.fatigue)
};

debugger;
var h1 = new Horse("the first");
h1.run(10);	
console.log(h1.totalMileage);		// 10 km
console.log(h1.mileage);			// 10 km
console.log(h1.fatigue);			// 0
debugger;
var h2 = new Horse("the second");
h2.run(12);	
console.log(h2.totalMileage);		// 22 km
console.log(h2.mileage);			// 12 km
console.log(h2.fatigue);			// 2
h1.run(25);	
console.log(h1.totalMileage);		// 47 km
console.log(h1.mileage);			// 35 km
console.log(h1.fatigue);			// 5
h1.run(6);	
console.log(h1.totalMileage);		// 53 km
console.log(h1.mileage);			// 41 km
console.log(h1.fatigue);			// 1