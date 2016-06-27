// Hometask #1:
var x = 10;
var y = 20;
// поменять переменные местами (два варианта)

// option #1:
var z = x;
x = y;
y = z;
alert("x= " + x);
alert("y =" + y);

// option #2:
y = x ^ y;
x = y ^ x;
y = y ^ x;
alert("x= " + x);
alert("y =" + y);

// option #3:
x = x + y;
y = x - y;
x = x - y;
alert("x= " + x);
alert("y =" + y);

// option #4:
x = [y, y = x][0];
alert("x= " + x);
alert("y =" + y);

// Hometask #2:
var a = 10,
	b = 20,
	c = 30;
// для трех (или четырех) переменных с помощью конструкции if Найти наибольшее число и умножить его на тысячу;
// затем следующее по величине число умножить на сто
// с оставшимся числом ничего не делать

if (a == b || a == c || b == c) {
	alert("Установите неодинаковые значения для переменных");
} else if (a > b) {
	if (a > c) {
		a *= 1000;
		if (b > c) {
			b *= 100;
		} else {
			c *= 100;
			}
	} else {
		c *= 1000;
		if (a > b) {
			a *= 100;
		}
	}
} else if (b > c) {
	b *= 1000;
	if (a > c) {
		a *= 100;
	} else {
		c *= 100;
		}
} else {
	c *= 1000;
	if (b > a) {
		b *= 100;
	} else {
		a *= 100;
	}
}
alert(a);
alert(b);
alert(c);

// alternative option:
if (a > b && a > c) {
   a *= 1000;
   if (b > c) {
      b *= 100;
   } else {
      c *= 100;
   }
} else if (b > a && b > c) {
   b *= 1000;
   if (a > c) {
      a *= 100;
   } else {
      c *= 100;
   }
} else if (c > a && c > b) {
   c *= 1000;
   if (a > b) {
      a *= 100;
   } else {
      b *= 100;
   }
}