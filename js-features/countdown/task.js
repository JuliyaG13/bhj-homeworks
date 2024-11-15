let totalSeconds = 59;

function updateTimer() {
    const timerElement = document.getElementById('timer');

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = String(hours).padStart(2, '0') + ':' +
                          String(minutes).padStart(2, '0') + ':' +
                          String(seconds).padStart(2, '0');

    timerElement.textContent = formattedTime;

    totalSeconds--;

    if (totalSeconds < 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
    }
}

const interval = setInterval(updateTimer, 1000);
