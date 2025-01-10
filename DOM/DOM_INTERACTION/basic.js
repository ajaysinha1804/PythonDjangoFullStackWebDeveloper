var myheader = document.querySelector("h1")
myheader.style.color='red'

// Randome color Function

function getRandomColor(){
    var letters="0123456789ABCDEF";
    var color = "#";
    for (var i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}


function changeMyHeaderColor(){
    colorInput=getRandomColor()
    myheader.style.color=colorInput;
}

setInterval("changeMyHeaderColor()",500);