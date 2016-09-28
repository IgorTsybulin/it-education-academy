/**
 * Created by igortsybulin on 18.09.16.
 */

alert("Hello, we are looking for young stars!");

var age = +prompt("How old are you?", '');
var height = +prompt("What is your height?");


if ((age >= 7 && age <= 10) || (age > 10 && height < 140)) {
    alert("You are Ok!");
} else {
    alert("Go home!");
}
*/


 if (7 <= age <= 10) {
 alert("You are Ok!");
 } else if (age > 10 && height < 140) {
 alert("You are Ok!");
 } else {
 alert("Go home!");
 }

