/**
 * Created by igortsybulin on 18.09.16.
 */

function compareArea (circleArea, squareArea) {
    var radius = prompt("What is a radius of a sircle?");
    var side = prompt("What is a side of a square?");

    circleArea = 3.14 * radius^2;
    squareArea = side^2;

    if (circleArea > squareArea) {
        return alert("A circle has a bigger area than a square.");
    } else if (circleArea < squareArea) {
        return alert("A square has a bigger area than a circle.");
    } else {
        return alert("Variables are undefined!");
    }
}

compareArea();


