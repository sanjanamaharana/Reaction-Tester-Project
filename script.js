
    let start = new Date().getTime();
    let score = 0;
    let fastest = null;
  

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function move() {
        const box = document.getElementById("boxs");
        const size = (Math.random() * 200) + 100;
        const left = Math.random() * (window.innerWidth - size);
        const top = Math.random() * (window.innerHeight - size);

        box.style.left = left + "px";
        box.style.top = top + "px";
        box.style.width = size + "px";
        box.style.height = size + "px";
        box.style.backgroundColor = getRandomColor();
        box.style.display = "block";

        start = new Date().getTime();
    }

    

   document.getElementById("boxs").onclick = function () {
    const end = new Date().getTime();
    const timeTaken = (end - start) / 1000;  // ✅ Move this up

    this.style.display = "none";

    // Update score
    score++;
    document.getElementById("score").textContent = score;

    // Update fastest time
    if (fastest === null || timeTaken < fastest) {
        fastest = timeTaken;
        document.getElementById("fastest").textContent = fastest.toFixed(3);
    }

    // Show last reaction time
    document.getElementById("lastTime").textContent = "Last Reaction Time: " + timeTaken.toFixed(3) + " sec";

    move();


    // Trigger animation
    document.getElementById("fastest").classList.remove("pulse");
    void document.getElementById("fastest").offsetWidth; // Re-trigger CSS animation
    document.getElementById("fastest").classList.add("pulse");


};


    document.getElementById("resetBtn").onclick = function () {
        score = 0;
        fastest = null;
        

        document.getElementById("score").textContent = "0";
        document.getElementById("fastest").textContent = "--";

        move();
    };

    move();
