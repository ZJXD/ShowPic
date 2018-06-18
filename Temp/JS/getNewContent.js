function getNewContent() {
    var request = getHTTPObject();
    if (request){
        request.open("GET","JS/example.txt",true);
        request.onreadystatechange = function() {
            if (request.readyState == 4){
                alert("Response Received")
                var para = document.createElement("p");
                var text = document.createTextNode(request.responseText);
                para.appendChild(text);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }
    else{
        alert("Sorry, your browser doesn\'t support XMLHTTPRequest");
    }
    alert("Function Done")
}

addLoadEvent(getNewContent);