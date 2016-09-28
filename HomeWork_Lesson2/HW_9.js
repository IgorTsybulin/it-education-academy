/**
 * Created by igortsybulin on 18.09.16.
 */




for ( ; ; ) {
    var a = +prompt("Insert number larger then 100, please.");
    if (!a || a > 100) {
        alert("Ok!");
        break;
    }
}

/*
var a = 0;
while (true) {
    var a = +prompt("Insert number larger then 100, please.");
    if (!a || a > 100) {
        alert("Ok!");
        break;
    }
}
 */