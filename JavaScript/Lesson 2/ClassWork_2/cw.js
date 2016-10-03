/*var age = prompt("How old are you?")

if (age < 7 || age > 10) {
	alert("You are Ok");
} else {
	alert("You don't need us");
}*/

/*var age = prompt("How old are you?");

if (age > 7 && age < 10) {
	alert("You are ok");
} else {
	alert("YOU DON'T NEED US!");
} */

/*var access;
var age = prompt("How old are you?");

access = (age > 7 && age < 10) ? "You are ok" : "YOU DON'T NEED US!";

alert(access);*/

/* var i = 0;

while (i<2) {
	console.log(i += 0.1);
} */

/*var i = 1;
for (; i<11; i++) {
	console.log("5 x "+i+" = "+5*i);
}*/

/* var age = prompt("How old are you?", "");
switch (age) {

	case "18":
	case "19":
	case "20":
	case "21":
		alert("Ok");
		break;
	default:
		alert("Not ok");
}


var age = prompt("How old are you?", "");
*/
/*
var user1 = {
	name: "John",
	age: 18
}

var user2 = {
	name: "John",
	age: 18
}

console.log(user1 === user2); */

/*var a = 1;
function foo(arg) {
	if (arg) { 
		a = 10;
	} else {
		var a = 20;
	}
	 return a;
}

console.log(foo(true));
console.log(a); */

/*var age = prompt("How old are you?", "");

var massage = (age < 18 || age > 25) ? "You are Ok" : "Go home";

alert(massage);
*/

/*
var age = prompt("How old are you?", "");
var sex = prompt("What is your sex?", "");

if (18 < age < 25 && sex == "Male")  {
	alert("You are Ok");
} else {
	alert("Go home");
} */

var user = prompt("Make your choice!");

var computer = Math.random();
if (computer <= 0.33) {
	computer = "rock";
} else if (computer <= 0.66) {
	computer = "paper";
} else {
	computer = "scissors";
} alert("Computer: " + computer);

var compare = function (choice1, choice2) {
	
	if (choice1 == choice1) {
		prompt("It is a tie");

	} else if (choice1 == "paper") {
		if (choice2 == "scissors") {
			alert("scissors wins");
		} else if (choice2 == "rock") {
			alert("rock wins");
		}
	
	} else if (choice1 == "scissors") {
		if (choice2 == "rock") {
			alert("rock wins");
		} else (choice2 == "paper") {
			alert("scissors wins");
		} 
	
	} else if (choice1 == "rock") {
		if (choice2 == "paper") {
			alert("paper wins");
		} else {
			alert("rock wins");
		}
	
	} else {
		confirm("Error! You can choose only paper, scissors or rock. Play once more!");
	}

}

alert(compare(user, computer));





