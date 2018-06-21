function moveElement(elementID,final_x,final_y,interval) {
    var elem = document.getElementById(elementID);
    // 元素中是否有 movement 属性
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y){
        return false;
    }

    if(xpos < final_x){
        xpos ++;
    }
    if(xpos > final_x){
        xpos --;
    }
    if(ypos < final_y){
        ypos ++;
    }
    if(ypos > final_y){
        ypos --;
    }

    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    // 设置元素的 movement 属性
    elem.movement = setTimeout(repeat, interval);
}