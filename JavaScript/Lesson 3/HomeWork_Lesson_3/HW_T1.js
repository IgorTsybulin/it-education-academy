/**
 * Created by igortsybulin on 20.09.16.
 */

var cars = ["Ferrari", "Porsche", "ZAZ"];
cars.unshift("Mclarren", "Pagani Zonda");
cars.push("Mercedes");
alert(cars.pop());
cars[cars.length - 2] = "Rolls Roys";
console.log(cars);
cars.reverse();
console.log(cars);
var carsStr = cars.join('-> ');
console.log(carsStr);