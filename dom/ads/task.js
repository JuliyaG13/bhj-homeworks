document.querySelectorAll('.rotator').forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let activeIndex = 0; 
    const changeAd = () => {
        cases[activeIndex].classList.remove('rotator__case_active');

        activeIndex = (activeIndex + 1) % cases.length; 

        const nextAd = cases[activeIndex];
        nextAd.classList.add('rotator__case_active');

        const color = nextAd.getAttribute('data-color');
        nextAd.style.color = color;
    }

    const speed = cases[activeIndex].getAttribute('data-speed');

    setInterval(() => {
        changeAd();

        const currentSpeed = cases[activeIndex].getAttribute('data-speed');
        clearInterval(); 
        setTimeout(() => {
            setInterval(changeAd, currentSpeed);
        }, currentSpeed);
    }, speed);
});
