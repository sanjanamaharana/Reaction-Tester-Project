function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var start = new Date().getTime();

function move() {
    var left;
    var top;
    var widths = (Math.random() * 200) + 100;
    left = Math.random() * (window.innerWidth - widths);

    top = Math.random() * (window.innerHeight - widths);
    document.getElementById("boxs").style.left = left + "px";
    document.getElementById("boxs").style.top = top + "px";
    document.getElementById("boxs").style.width = widths + "px";
    document.getElementById("boxs").style.height = widths + "px";
    document.getElementById("boxs").style.display = "block";
    document.getElementById("boxs").style.backgroundColor = getRandomColor();
    start = new Date().getTime();
}

move();

document.getElementById("boxs").onclick = function () {
    document.getElementById("boxs").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    alert(timeTaken + " second");
    move();
}


