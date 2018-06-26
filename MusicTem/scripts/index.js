

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

function prepareSlideshow() {
    var intro = document.getElementById("intro");
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src","images/slideshow.gif");
    preview.setAttribute("alt","a glimpse of what awaits you");
    preview.setAttribute("id","preview");
    preview.style.left = "0px";
    preview.style.top = "0px";
    slideshow.appendChild(preview);

    var frame = document.createElement("img");
    frame.setAttribute("src","images/frame.gif");
    frame.setAttribute("alt","");
    frame.setAttribute("id","frame");
    slideshow.appendChild(frame);

    insertAfter(slideshow,intro);

    // 一个是导航、链接都会有幻灯片，一个就只是链接
    // var links = intro.getElementsByTagName("a");
    var links = document.getElementsByTagName("a");
    var destination;
    for (let index = 0; index < links.length; index++) {
        links[index].onmouseover = function() {
            destination = this.getAttribute("href");
            if (destination.indexOf("index.html") != -1){
                moveElement("preview",0,0,5);
            }
            if (destination.indexOf("about.html") != -1){
                moveElement("preview",-150,0,5);
            }
            if (destination.indexOf("photos.html") != -1){
                moveElement("preview",-300,0,5);
            }
            if (destination.indexOf("live.html") != -1){
                moveElement("preview",-450,0,5);
            }
            if (destination.indexOf("contact.html") != -1){
                moveElement("preview",-600,0,5);
            }
        }
    }
}

addLoadEvent(prepareSlideshow);