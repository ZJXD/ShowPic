function addChild(){
    var testdiv = document.getElementById("testdiv");
    var para = document.createElement("p");
    testdiv.appendChild(para);
    var text = document.createTextNode("Hello World!");
    para.appendChild(text);

    para = document.createElement("p");
    text = document.createTextNode("This is");
    para.appendChild(text);
    var emphasis = document.createElement("em");
    text = document.createTextNode(" my");
    emphasis.appendChild(text);
    para.appendChild(emphasis);
    text = document.createTextNode(" content.");
    para.appendChild(text);

    testdiv.appendChild(para);
}

window.onload = addChild();