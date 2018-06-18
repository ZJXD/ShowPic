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

// 添加页面初始加载函数
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }
    else{
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

// 在元素前插入元素
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function prepareGallery(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = document.getElementsByTagName("a");

    // 添加点击事件，并根据图片显示结果来决定是否打开图片链接
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.onclick = function(){
            return !showPic(this);
        }

        // 键盘处理事件（这个是任何一个按键都会触发）
        // element.onkeypress = element.onclick;
    }
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;

    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","../images/place.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var descText = document.createTextNode("Choose an Image");
    description.appendChild(descText);
    var gallery = document.getElementById("imagegallery");

    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];

    alert(body_element.childNodes.length);
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);

// window.onload = countBodyChildren;

// 在页面加载时添加多个函数
// window.onload = function(){
//     firstFunction();
//     secondFunction();
// }