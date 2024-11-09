document.querySelectorAll('.font-size').forEach(fontSizeElement => {
    fontSizeElement.addEventListener('click', (event) => {
        event.preventDefault(); 
        document.querySelectorAll('.font-size').forEach(el => {
            el.classList.remove('font-size_active');
        });

        fontSizeElement.classList.add('font-size_active');

        const size = fontSizeElement.getAttribute('data-size');
        const bookElement = document.getElementById('book');

        bookElement.classList.remove('book_fs-small', 'book_fs-big');

        if (size) {
            bookElement.classList.add(`book_fs-${size}`);
        }
    });
});
