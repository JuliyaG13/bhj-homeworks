let clickCounter = 0;
let lastClickTime = Date.now();
let clickSpeed = 0;

const cookieImage = document.getElementById('cookie');
const counterDisplay = document.getElementById('clicker__counter');
const speedDisplay = document.getElementById('clicker__speed');

cookieImage.addEventListener('click', () => {
    clickCounter++;
    
    const currentWidth = parseInt(cookieImage.style.width) || 200;
    const currentHeight = parseInt(cookieImage.style.height) || 200;
    cookieImage.style.width = currentWidth + (clickCounter % 2 === 0 ? 10 : -10) + 'px';
    cookieImage.style.height = currentHeight + (clickCounter % 2 === 0 ? 10 : -10) + 'px';
    
    counterDisplay.textContent = clickCounter;

    const currentTime = Date.now();
    const timeElapsed = (currentTime - lastClickTime) / 1000; // время в секундах
    clickSpeed = Math.round(clickCounter / (currentTime / 1000));
    speedDisplay.textContent = clickSpeed;

    lastClickTime = currentTime;
});
