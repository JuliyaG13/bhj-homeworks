document.querySelectorAll('.dropdown').forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    valueElement.addEventListener('click', () => {
        listElement.classList.toggle('dropdown__list_active');
    });

    dropdown.querySelectorAll('.dropdown__item').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); 
            const selectedValue = item.textContent;
            valueElement.textContent = selectedValue; 
            listElement.classList.remove('dropdown__list_active'); 
        });
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            listElement.classList.remove('dropdown__list_active');
        }
    });
});
