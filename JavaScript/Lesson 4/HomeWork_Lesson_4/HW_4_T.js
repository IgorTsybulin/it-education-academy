/**
 * Created by igortsybulin on 23.09.16.
 */

/*
 Задача 1

 Создайте функцию rnd(min, max, float), которая будет возвращать случайное число от min до max.
 Параметр float, по умолчанию должен быть false, означает возврат функцией дробного числа,
 если true, и целого — если false.
 */


function rnd(min, max, float) {
    var randVal = min + Math.floor(Math.random()*(max + 1 - min));
    if (float) {
        return randVal/1000;
    }
    return randVal;

}

console.log(rnd(1,100,true));

console.log(rnd(1,100,false));


/*
 Задача 2

Создайте функцию rndArray(num, min, max), где:
num — количество значений
min — от
max — до
Функция должна возвращать массив длинной num, заполненный случайными числами в диапазоне от min до max.

    [Используйте функцию rnd из первой задачи].
*/


function rndArray(num, min, max) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        var randVal = min + Math.floor(Math.random()*(max + 1 - min));
        arr.push(randVal);
    }
    return arr;
}

console.log(rndArray(4, 0, 100));


/*
 Задача 3

Создайте функцию rndColor(), которая будет генерировать случайный цвет в RGB формате (rgb(12, 12, 25)).

    [Используйте функцию rnd из первой задачи].
*/


function rndColor() {
    var min = 0;
    var max = 25;
    var color = "rgb(";
    for (var i = 0; i < 3; i++) {
        var randVal = min + Math.floor(Math.random()*(max + 1 - min));
        color = color + randVal;
        if (i < 2) {
            color = color + ",";
        }
    }
    color = color + ")";
    return color;
}

console.log(rndColor());


/*
 Задача 4

 Создайте функцию getWord(capital), которая возвращает слово, cгенерированное по следующим правилам:
 • Слово начинается с согласной
 • В слове согласные чередуются с гласными
 • В слове случайное количесво букв, от трех до 10
 • По умолчанию capital = false.
 • Если аргумент capital == true, то слово должно начинаться с большой буквы.

 vowel  = "ауоыиэяюёе";
 consonant = "бвгджзйклмнпрстфхцчшщ";

 [Используйте функцию rnd из первой задачи].

 */

function getRandom(min,max) {
    return min + Math.floor(Math.random()*(max + 1 - min));
}

function getWord(capital) {

    var vowel  = "ауоыиэяюёе";
    var consonant = "бвгджзйклмнпрстфхцчшщ";
    var res = "";
    var resLength = getRandom(3,10);
    if (capital) {
        var index = getRandom(0,consonant.length);
        res = res + consonant.charAt(index).toUpperCase();
        resLength--;
    }
    for (var i = 0; i < resLength; i++) {
        if (capital) {
            if (i % 2 === 0) {
                var index = getRandom(0,vowel.length);
                res = res + vowel.charAt(index);
            } else {
                var index = getRandom(0,consonant.length);
                res = res + consonant.charAt(index);
            }
        } else {
            if (i % 2 === 0) {
                var index = getRandom(0,consonant.length);
                res = res + consonant.charAt(index);
            } else {
                var index = getRandom(0,vowel.length);
                res = res + vowel.charAt(index);
            }
        }
    }
    return res;
}

console.log(getWord(true));

console.log(getWord(false));

/*
 Задача 5

Создайте функцию getPhrase(words), которая принимает на вход количество слов, и генерирует фразу из них.
• Фраза начинается с большой буквы
• Фраза заканчивается точкой или знаком восклицания
• Количество слов в фразе не может быть меньше 3 и больше 15

    [Используйте функцию getWord() из предыдущей задачи].
*/

function getPhrase(words) {
    var res = [];
    var phraseLength = words;

    if (words >= 3 && words <= 15) {
        res = res + getWord(true);
        phraseLength--;
    } else {
        return "It is not a proper number of words!";
    }

    for (var i = 0; i < phraseLength; i++) {
        res = res + " " + getWord(false);
    }

    res = res + "! ";

    return res;
}

console.log(getPhrase(10));

/*
 Задача 6

 Создайте функцию getText(paragraphs, words), которая принимает на вход количество абзацев (paragraphs) с слов в абзаце (words), и генерирует текст.
 • Абзац может состоять из 2 и более фраз
 • Количество слов в фразе не может быть меньше трех
 • Абзацы разделены пустой строкой

 [Используйте функцию getPhrase() из предыдущей задачи].
 */


function getText(paragraphs, words) {

    var textLength = paragraphs;
    var phrasehLength = words;
    if (paragraphs) {
        var res = [];
        for (var i = 0; i < textLength; i++) {

            var resInt = [];
            if (words > 3) {
                for (var j = 0; j < phrasehLength; j++) {
                    resInt = resInt + getPhrase(words);
                }
            } else {
                return "It is not a proper number of words!";
            }
            res = res + resInt + '\n' + '\n';
        }
    } else {
        return "It is not a proper number of paragraphs!";
    }

    return res;
}

console.log(getText(1, 4));

console.log(getText(2, 6));

console.log(getText(false, false));