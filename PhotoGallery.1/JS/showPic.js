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

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];

    alert(body_element.childNodes.length);
}

// window.onload = countBodyChildren;