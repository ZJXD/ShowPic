function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (let index = 0; index < rows.length; index++) {
        rows[index].onmousemove = function () {
            this.style.fontWeight = "bold";
        }

        rows[index].onmouseout = function () {
            this.style.fontweight = "normal";
        }
    }
}

addLoadEvent(highlightRows);