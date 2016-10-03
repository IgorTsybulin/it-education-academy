/**
 * Created by igortsybulin on 18.09.16.
 */

var browserName = prompt("What browser do you use?")

switch (browserName) {
    case 'IE':
        alert("Ой, разве это браузер?");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert("Ваш браузер мы поддерживаем!");
        break;

    default:
        alert("Слишком у вас экзотический браузер, но мы надеемся в нем тоже будет работать нормально!");
        break;
}