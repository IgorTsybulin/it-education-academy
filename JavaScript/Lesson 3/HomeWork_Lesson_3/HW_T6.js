/**
 * Created by igortsybulin on 23.09.16.
 */

/*
 Задача 6*.
 У вас есть массив:
 [
 ['Name', 'Color', 'Element', 'Likes'],
 ['Trixie', 'Green', 'Earth', 'Flowers'],
 ['Tinkerbell', 'Blue', 'Air', 'Singning'],
 ['Blum', 'Pink', 'Water', 'Dancing']

 ]

 Вывести в консоль массив в виде ASCII таблицы:

 ==========================================
 | Name       | Color  | Element | Likes   |
 | Trixie        | Green | Earth      | Flowers |
 | Tinkerbell | Blue    | Air          | Singing |
 | Blum        | Pink    | Water     | Dancing |
 ==========================================

 Ширина колонки должна быть по ширине самого длинного элемента в ней.

 */

var size = 4;
var source = [
        ["Name", "Color", "Element", "Likes"],
        ["Trixie", "Green", "Earth", "Flowers"],
        ["Tinkerbell", "Blue", "Air", "Singing"],
        ["Blum", "Pink", "Water", "Dancing"],
    ];

/*
for (let i = 0; i < source[1][1].length; i++) {
    var arr = [],
        arr.push;
    console.log(arr);
}


console.log(source[0] + '\n' + source[1] + '\n' + source[2] + '\n' + source[3])

*/


var outcome = [],
    size = 4;

for (let i = 0; i < size; i++) {
    let internalOutcome = [];
    for (let j = 0; j < size; j++) {
            for (k = 0; k < source[1][1]; k++) {
                let codeVal = (source[1][1].charCodeAt(k));
                internalOutcome.push(codeVal);
            }

    }
    outcome.push(internalOutcome);
}

console.log(outcome[0] + '\n' + outcome[1]);




/*
for (let i = 0; i < size; i++) {
    var inner = [];
    for (let j = 0; j < size; j++) {
        if (inner[i][j].length > 0) {
            inner[i][j].
        }
        inner[i][j].charCodeAt();
    }
}
*/
