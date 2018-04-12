function showPic(whichPic){
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    var title = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = title;
}

function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];

    alert(body_element.childNodes.length);
}

// window.onload = countBodyChildren;