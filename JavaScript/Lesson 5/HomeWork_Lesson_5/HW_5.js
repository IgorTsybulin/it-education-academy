/**
 * Created by igortsybulin on 26.09.16.
 */


/* Задание №1

 Распечатать «ассоциативный массив» (на самом деле массив объектов) в виде ASCII таблицы.

 Например, у Вас есть массив:

 var arr = [
 {
 'Name':    'Trixie',
 'Color':   'Green',
 'Element': 'Earth',
 'Likes':   'Flowers'
 },
 {
 'Name':    'Tinkerbell',
 'Color':   'Blue',
 'Element': 'Air',
 'Likes':   'Singning'

 },
 {
 'Name':    'Blum',
 'Color':   'Pink',
 'Element': 'Water',
 'Likes':   'Dancing'

 }

 ];

 --------------------------------------------------
 | Name         | Color   | Element   | Likes     |
 --------------------------------------------------
 | Trixie       | Green   | Earth     | Flowers   |
 | Tinkerbell   | Blue    | Air       | Singing   |
 | Blum         | Pink    | Water     | Dancing   |
 --------------------------------------------------

 Положение элементов в каждом объекте может меняться, но сами ключи
 должны быть в одном порядке.

 */


var arr = [
    {
        'Name':    'Trixie',
        'Color':   'Green',
        'Element': 'Earth',
        'Likes':   'Flowers'
    },
    {
        'Name':    'Tinkerbell',
        'Color':   'Blue',
        'Element': 'Air',
        'Likes':   'Singning'

    },
    {
        'Name':    'Blum',
        'Color':   'Pink',
        'Element': 'Water',
        'Likes':   'Dancing'

    }

];

function makeData() {
    var table = [];

    table.push('----------------------------');

    var cont = [];
    for (var key in arr[0]) {
        cont.push(key);
    }
    table.push('| ' + cont.join('|') + ' |');

    table.push('----------------------------');
    for (i = 0; i < arr.length; i++) {
        var line = [];
        for (var key in arr[i]) {
            line.push(arr[i][key]);
        }
        table.push('| ' + line.join('|') + ' |');
    }
    table.push('----------------------------');
    return table.join('\n');

}

console.log(makeData());

// hello Andrey