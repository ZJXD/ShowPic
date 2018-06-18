function displayAbbreviations(params) {
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;

    var dlist = document.createElement("dl");
    for (let index = 0; index < abbreviations.length; index++) {
        const element = abbreviations[index];
        const defintion = element.getAttribute("title");
        const key = element.lastChild.nodeValue;

        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(defintion);
        ddesc.appendChild(ddesc_text);

        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);

    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);