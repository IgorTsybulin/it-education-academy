/**
 * Created by Igor Tsybulin on 21.09.16.
 */

var cities = ["гамбург", "зальцбург", "оренбург", "питербург", "лондон", "Йоханессбург", "Париж",
    "Марсель", "Вена", "Рим"];
var userCities = prompt("What are your favourite cities in the world?", "Милан;Неаполь");

var userCitiesArr = userCities.split(';');
var newCitiesArr = cities.concat(userCitiesArr);

newCitiesArr.sort();

newCitiesArr[newCitiesArr.indexOf("питербург")] = "Магдебург";

newCitiesArr.unshift("Киев");
newCitiesArr.push("Киев");

for (let i = 0; i < newCitiesArr.length; i++) {
    if (newCitiesArr[i].length > 0) {
        newCitiesArr[i] = newCitiesArr[i][0].toUpperCase() + newCitiesArr[i].slice(1);
    }
}

for (let i = 0; i < newCitiesArr.length; i++) {
    if (newCitiesArr[i].indexOf("бург") != -1) {
        newCitiesArr[i] = "крепость " + newCitiesArr[i].replace("бург","");
    }
}
console.log(newCitiesArr.join(' => '));




