function showPic(whichPic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");

    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);

    if (document.getElementById("description")) {
        var title = whichPic.getAttribute("title");
        title = title ? title : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType = 3)
            description.firstChild.nodeValue = title;
    }
    return true;
}

function prepareGallery(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");

    // 添加点击事件，并根据图片显示结果来决定是否打开图片链接
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.onclick = function () {
            return !showPic(this);
        };
    }
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;

    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var descText = document.createTextNode("Choose an Image");
    description.appendChild(descText);
    var gallery = document.getElementById("imagegallery");

    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);