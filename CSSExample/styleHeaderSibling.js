function styleHeaderSibling() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
    for (let index = 0; index < headers.length; index++) {
        elem = getNextElement(headers[index].nextSibling);
        // elem = headers[index].nextElementSibling;

        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.2em";
    }
}

// 获取下一个元素节点
function getNextElement(node) {
    if (node.nodeType == 1){
        return node;
    }
    if (node.nextSibling){
        return getNextElement(node.nextSibling);
    }

    return null;
}

addLoadEvent(styleHeaderSibling);