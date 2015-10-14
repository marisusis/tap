/**
 * Created with pixelventure.
 * User: spacegeek224
 * Date: 2015-10-13
 * Time: 01:23 PM
 * To change this template use Tools | Templates.
 */
interact('.tap-target').on('tap', function(event) {
    event.target.innerHTML = "TAP";
    event.target.classList.toggle("tap");
    event.target.classList.remove("hold", "start", "doubletap");
}).on('doubletap', function(event) {
    event.target.innerHTML = "DOUBLETAP";
    event.target.classList.toggle("doubletap", "tap", "hold");
}).on('hold', function(event) {
    event.target.innerHTML = "HOLD";
    event.target.classList.toggle("hold", "tap", "doubletap");
})
var tg = document.getElementsByClassName('tap-target')[0];