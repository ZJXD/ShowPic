// 缩略语生成列表
function displayAbbreviations() {
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

// 表格行在鼠标悬浮时显示的样式
function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (let index = 0; index < rows.length; index++) {
        rows[index].oldClassName = rows[index].className;
        rows[index].onmouseover = function () {
            addClass(this,"highlight");
        };

        rows[index].onmouseout = function () {
            this.className = this.oldClassName;
        };
    }
}

// 表格隔行显示
function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table")
    for (let index = 0; index < tables.length; index++) {
        var odd = false;
        const rows = tables[index].getElementsByTagName("tr");
        for (let y = 0; y < rows.length; y++) {
            if (odd == true){
                addClass(rows[y],"odd");
                odd = false;
            }else{
                odd = true;
            }
        }
    }
}

// addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);