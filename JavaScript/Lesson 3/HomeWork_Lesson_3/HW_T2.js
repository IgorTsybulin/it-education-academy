/**
 * Created by igortsybulin on 20.09.16.
 */

// Initialize array with random values from -10 up to 22;

var source = [],
    size = 10,
    minRandValue = - 10,
    maxRandValue = 22;

for (let i = 0; i < size; i++) {
    let internal = [];
    for (let j = 0; j < size; j++) {
        let randValue = minRandValue + Math.floor(Math.random() * (maxRandValue + 1 - minRandValue));
        internal.push(randValue);
    }
    source.push(internal.join('\t'));
}

console.log(source[0] + '\n' + source[1] + '\n' + source[2] + '\n' + source[3] + '\n' + source[4] + '\n' + source[5] +
    '\n' + source[6] + '\n' + source[7] + '\n' + source[8] + '\n' + source[9]);


for (let i = 0; i < source[4].length; i++) {
    if (i % 2 != 0) {
        if (source[4][i] % 2 == 0) {
            console.log(source[4][i]);
        }
    }
}

// Используя один цикл найдите сумму значений элементов расположенных по обеим диагоналям матрицы

