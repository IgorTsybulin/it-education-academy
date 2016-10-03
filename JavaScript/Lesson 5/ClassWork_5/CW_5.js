/**
 * Created by igortsybulin on 26.09.16.
 */

user = {};

user.firstname = "Vasiliy";
user.lastname = "Vasiliev";
user.age = 29;

user.firstname = "Ivan";
user.lastname = "Ivanov";
delete user.age;


console.log(user.firstname + " " + user.lastname);


car = {
    model: "VW",
    year: 2013,
    manufacturer: "Germany"
};

car.year = 2014;

console.log(car.model === undefined);
console.log(car.manufacturer === undefined);
console.log(car.body === undefined);

console.log('model' in car);
console.log("manufacturer" in car);
console.log("body" in car);


for (var model in car) {
    console.log("Name: " + model + " Content: " + car[model]);
}


var person = {
    name: "Petro",
    getName: function () {
        return this.name;
    },
    sayHello: function () {
        alert("Hello, " + person.getName() + "!");
        return this
    },
    toString: function () {
        return "Person: " + this.name
    }
}


alert(person.sayHello().toString());


