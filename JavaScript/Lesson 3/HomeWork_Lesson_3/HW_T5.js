/**
 * Created by igortsybulin on 23.09.16.
 */


/*Создать 2 переменных: строка S и число N.
 Преобразовать строку S в строку длины N следующим образом:
 если длина строки S больше N, то отбросить первые символы,
 если длина строки S меньше N, то в её конец добавить символы "!" (восклицательный знак).
 Вывести результат в консоль.
*/

var s = "string",
    n = 8;

if (s.length > n) {
    console.log(s.slice((s.length - n)*-1));
} else if (s.length = n) {
    console.log(s);
} else {
    var count = n - s.length;
    for(i = 0 ; i < count ; i++ )
    {
        s= s+"!";
    }
    console.log(s);
}