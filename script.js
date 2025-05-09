var start = new Date().getTime();
let score = 0;
let fastest = null;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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

document.getElementById("boxs").onclick = function () {
    const end = new Date().getTime();
    const timeTaken = (end - start) / 1000;

    this.style.display = "none";
    alert(timeTaken + " second");

    // Update score
    score++;
    document.getElementById("score").textContent = score;

    // Update fastest time
    if (fastest === null || timeTaken < fastest) {
        fastest = timeTaken;
        document.getElementById("fastest").textContent = fastest.toFixed(3);
    }

    move();
};

move();
