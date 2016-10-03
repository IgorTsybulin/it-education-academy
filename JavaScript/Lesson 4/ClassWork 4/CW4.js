/**
 * Created by igortsybulin on 23.09.16.
 */

// var name = prompt("What is your name?");

/* function sayHi(userName) {
    alert("Hello, " + userName + "!");
}

sayHi('Igor');
*/

/*
function sayHi(userName) {
    if (typeof(userName)!= 'string') {
        alert('Only letter are alloewd for names!');
    } else {
        alert("Hello, " + userName + "!");
    }
}

sayHi('Igor');
*/

/*
function showMessage(from, text) {
    from = '**' + from + '**'; // changing local variable
    alert( from + ': ' + text );
}
var from = "Mary";
showMessage(from, "Hello");
alert( from ); // old from value
*/

/*
function showMessage(from, text) {
    text = text || 'No text here ';
    alert( from + ": " + text );
}
showMessage("Mary", "Hello!"); // Mary: Hello!
showMessage("Mary"); // Mary: No text here(
    */

/*
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
var arr = [ 1, 2, 15, 18, 20, 4 ];

arr.sort(compareNumeric);

arr.sort(function(a, b) {
    return a - b;
});

alert(arr); // 1, 2, 15
 */

/*
function sum(a, b) {
    var a = +prompt('a');
    var b = +prompt('b');
    return a + b;

}

console.log(sum(a, b));
*/

/*
var arr = [];
function getStrings (arr) {
    var arrB = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == "string") {
            arrB.push(arr[i]);
        }
    }
    return arrB;
}

console.log(getStrings([1, 'b', 3, 'c']));
*/

/*
function countCredit (s, p, n) {
    return annCredit = s*p/(1 - Math.pow((1 + p),-n));
}

console.log(countCredit(10000,0.18,12));
*/

/*
function log(a,b) {

    for (var i = 0; i < arguments.length; i++) {
        console.log((i + 1) +'. '+arguments[i]+"\n");
    }
}

log('Hello', 'World', 'again!');
*/

/*

function numCompare(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

var arr = [1,5,23,346,2345,5,45,657,42,3];

arr.sort(numCompare);

console.log(arr);
*/

/*

 arr.sort(function(a, b) {
 return b - a;
 });

 */

var arr,
    min = +prompt('min'),
    max = +prompt('max'),
    a = +prompt('ddsd');

function getRandomNum (min, max) {
    var res = min + Math.floor(Math.random()*(max + 1 - min));
    return res;
}

function getArray(a) {
    var arr = [];
    for (var i = 0; i < a; i++) {
        arr.push(getRandomNum(min,max));
    }
    return arr;
}

function getMatrix (a) {
    var arr = [];
    for (var i = 0; i < a; i++){
        arr.push(getArray(a));
    }
    return arr.join('\n');
}

console.log(getMatrix(a));





















