function displayCitations() {
    var quotes = document.getElementsByTagName("blockquote");
    for(var i = 0; i < quotes.length; i++){
        var elem = quotes[i];
        if(!elem.getAttribute("cite")){
            continue;
        }

        // 获取链接
        var url = elem.getAttribute("cite");

        // 建立链接标签
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);

        // 插入链接
        var superscript = document.createElement("sup");
        superscript.appendChild(link);

        // var laasEelem = elem.lastElementChild;
        elem.lastElementChild.appendChild(superscript);
    }
}

addLoadEvent(displayCitations);