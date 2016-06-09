	alert(1/0);		// Infinity
	alert(`not number` * 5);		// Nan, mistake

	var age = null;
	alert(age);

	var x;		// значение не присвоено
	alert(x);	// выведет undefined

typeof undefined // "undefined"
typeof 0; // "number"
alert(typeof 0);
typeof true; // "boolean"
alert(typeof true);
typeof "foo"; // "string"
alert(typeof "foo");
typeof {}; // "object"
alert(typeof {});
typeof null; // "object"
alert(typeof null);