/**
 * Created by igortsybulin on 18.09.16.
 */

var user = prompt("Hello! Log in, please.");

if (user == "Admin") {
    var password = prompt("Insert your password, please.");
    if (password == "Black Lord") {
        alert("You are welcome!");
    } else if (password == null) {
        alert("Entry is canceled.");
    } else {
        alert("Password is wrong!");
    }
} else if (user == null) {
    alert("Entry is canceled.");
} else {
    alert("I don't know you!");
}