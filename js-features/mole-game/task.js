let deadCount = 0;
let lostCount = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function randomHole() {
    const index = Math.floor(Math.random() * 9) + 1;
    return getHole(index);
}

function showMole() {
    const hole = randomHole();
    hole.classList.add('hole_has-mole');
    setTimeout(() => {
        hole.classList.remove('hole_has-mole');
    }, 1000);
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
            document.getElementById('dead').textContent = deadCount;
            if (deadCount === 10) {
                alert('Вы победили!');
                resetGame();
            }
        } else {
            lostCount++;
            document.getElementById('lost').textContent = lostCount;
            if (lostCount === 5) {
                alert('Вы проиграли!');
                resetGame();
            }
        }
        showMole(); 
    });
}

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    document.getElementById('dead').textContent = deadCount;
    document.getElementById('lost').textContent = lostCount;
}

setInterval(showMole, 2000);
