<script>
    let start = new Date().getTime();
    let score = 0;
    let fastest = null;
    let topTimes = [];

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

    function updateLeaderboard(time) {
        topTimes.push(time);
        topTimes.sort((a, b) => a - b);
        topTimes = topTimes.slice(0, 3); // Top 3

        const list = document.getElementById("topTimes");
        list.innerHTML = "";
        topTimes.forEach(t => {
            const li = document.createElement("li");
            li.textContent = t.toFixed(3) + " sec";
            list.appendChild(li);
        });
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

        // Update leaderboard
        updateLeaderboard(timeTaken);

        move();
    };

    document.getElementById("resetBtn").onclick = function () {
        score = 0;
        fastest = null;
        topTimes = [];

        document.getElementById("score").textContent = "0";
        document.getElementById("fastest").textContent = "--";
        document.getElementById("topTimes").innerHTML = "<li>--</li><li>--</li><li>--</li>";

        move();
    };

    move();
</script>
