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