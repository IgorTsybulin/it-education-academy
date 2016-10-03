/*
function fibonacci(n) {
    var a = 1;
    var b = 1;

    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
*/

function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log( fibonacci(15) );
console.log( fibonacci(16) );
console.log( fibonacci(17) );
console.log( fibonacci(17) );