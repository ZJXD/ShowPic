function createVideoControls() {
    var vids = document.getElementsByTagName("video");
    for (let index = 0; index < vids.length; index++) {
        addControls(vids[index]);
    }
}

function addControls(vid) {
    // vid.removeAttribute("controls");

    // vid.height = vid.videoHeight/2;
    // vid.width = vid.videoWidth/2;
    // vid.parentNode.style.height = vid.height + "px";
    // vid.parentNode.style.width = vid.width + "px";

    // var controls = document.createElement("div");
    // controls.setAttribute("class","controls");

    // var play = document.createElement("button");
    // play.setAttribute("title","Play");
    // play.innerHTML = "&#x25BA;";

    // play.onclick = function (){
    //     if (vid.ended){
    //         vid.currentTime = 0;
    //     }
    //     if (vid.paused){
    //         vid.play();
    //     }
    //     else{
    //         vid.pause();
    //     }
    // };

    // vid.addEventListener("play",function (){
    //     play.innerHTML = "&#x2590;&#x2590;";
    //     play.setAttribute("paused",true);
    //     play.setAttribute("title","Pause");
    // },false);

    // vid.addEventListener("pause",function (){
    //     play.removeAttribute("paused");
    //     play.innerHTML = "&#x25BA;";
    //     play.setAttribute("title","Play");
    // },false);

    // vid.addEventListener("ended", function (){
    //     vid.pause();
    // },false);

    // controls.appendChild(play);
    // vid.parentNode.insertBefore(controls,vid);
}

addLoadEvent(createVideoControls);