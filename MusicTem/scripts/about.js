// 根据传入的元素 id ，其他的不显示，只显示这个
function showSection(id) {
    var sections = document.getElementsByTagName("section");
    for (let index = 0; index < sections.length; index++) {
        if (sections[index].getAttribute("id") != id){
            sections[index].style.display = "none";
        }else{
            sections[index].style.display = "block";
        }
    }
}
// 对 nav 中的链接添加 showSection 函数
function prepareInternalnav() {
    var articles = document.getElementsByTagName("article");
    if (articles.length < 1) return false;
    var navs = articles[0].getElementsByTagName("nav");
    if (navs.length < 1) return false;
    var links = navs[0].getElementsByTagName("a");
    for (var index = 0; index < links.length; index++) {
        var sectionId = links[index].getAttribute("href").split("#")[1];
        if (!document.getElementById(sectionId)) continue;
        document.getElementById(sectionId).style.display = "none";
        links[index].destination = sectionId;
        links[index].onclick = function () {
            showSection(this.destination);
            return false;
        };
    }
}

addLoadEvent(prepareInternalnav);