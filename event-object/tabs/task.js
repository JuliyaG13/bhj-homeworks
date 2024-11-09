document.querySelectorAll('.tabs').forEach(tabsContainer => {
    const tabs = tabsContainer.querySelectorAll('.tab');
    const contents = tabsContainer.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('tab_active'));
            tab.classList.add('tab_active');

            contents.forEach(content => content.classList.remove('tab__content_active'));
            contents[index].classList.add('tab__content_active');
        });
    });
});
