function moveElement(elementID, final_x, final_y, interval) {
    var elem = document.getElementById(elementID);
    // 元素中是否有 movement 属性
    if (elem.movement) {
        clearTimeout(elem.movement);
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return false;
    }

    var dist = 0;
    dist = (final_x - xpos) / 10;
    if (dist < 0) {
        dist = Math.floor(dist);
    }
    else {
        dist = Math.ceil(dist);
    }
    xpos += dist;

    dist = (final_y - ypos) / 10;
    if (dist < 0) {
        dist = Math.floor(dist);
    }
    else {
        dist = Math.ceil(dist);
    }
    ypos += dist;

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    // 设置元素的 movement 属性
    elem.movement = setTimeout(repeat, interval);
}