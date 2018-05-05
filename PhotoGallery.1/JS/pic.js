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

window.onload = prepareGallery();


// 在页面加载时添加多个函数
// window.onload = function(){
//     firstFunction();
//     secondFunction();
// }