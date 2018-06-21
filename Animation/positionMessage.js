function positionMessage() {
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "250px";
    elem.style.top = "250px";
    moveElement("message",500,0,10);
}

addLoadEvent(positionMessage);