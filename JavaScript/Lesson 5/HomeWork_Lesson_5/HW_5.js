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


let source = [
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

//10, 5, 5, 8
//13, 8, 8, 11
function getMaxLength(arr){
    let objMaxLength = [0,0,0,0];
    let intIndex = 0;
    for (var key in arr[0]) {
       objMaxLength[intIndex++] = key.length;
    }

    intIndex = 0;
    for (let i = 0; i < arr.length; i++){
        for (var key in arr[i]) {
           
           let l = arr[i][key].length;
           let cl = objMaxLength[intIndex];
           
           if(l > cl){
                objMaxLength[intIndex] = l;
           }

           intIndex++;
        }

        intIndex = 0;
    } 

    return objMaxLength
}   

function calculateMax(arr){
    let max = 0;
    arr.forEach(function(x){
        return max += x; 
    });
    return max;
} 

function createSeparateRow(length){
    let str = '';
    for (let i = 0; i < length; i++) {
        str = str + '-';
    }
    return str;
}

function addSpaces(item, count){
    for (let i = 0; i < count; i++){
        item = item + ' ';
    }
    return item;
}

function extend(source, lengths){
    for (let i = 0; i< source.length; i++){
        if(source[i].length < lengths[i]){
            source[i] = addSpaces(source[i], lengths[i] - source[i].length)
        }
    }

    return source;
}

function makeData(source) {
    
    let maxLengthArr = getMaxLength(source);
    let max = calculateMax(maxLengthArr);
    
    max = max + 7;
    
    let table = [];

    table.push(createSeparateRow(max));

    var headers = [];
    for (var key in source[0]) {
        headers.push(key);
    }

    let extendedHeader = extend(headers, maxLengthArr);
    table.push('| ' + extendedHeader.join('|') + ' |');

    table.push(createSeparateRow(max));
    for (let i = 0; i < source.length; i++) {
        var line = [];
        for (var key in source[i]) {
            line.push(source[i][key]);
        }
        let extendedLine = extend(line, maxLengthArr);
        table.push('| ' + extendedLine.join('|') + ' |');
    }
    table.push(createSeparateRow(max));
    return table.join('\n');

}



console.log(makeData(source));

// console.log(test());

// hello Andrey