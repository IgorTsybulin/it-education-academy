/**
 * Created by igortsybulin on 18.09.16.
 */

var sum = 0;

for (i = 1; i < 6; i++) {
    var value = +prompt(i);
    sum += value/5;
}
alert("Среднее арифметическое введенных Вами чисел равно - " + sum);