/**
 * Created by igortsybulin on 23.09.16.
 */

var source = prompt("Choose any word please", "Победа");
console.log(source);
for (let i = 1; i < source.length; i++) {
    console.log(source.slice((source.length - i)*-1));
}