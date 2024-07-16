document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');

    // Change header background on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#fff';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

    // Change hero and footer background color periodically
    setInterval(() => {
        hero.style.backgroundColor = hero.style.backgroundColor === 'rgb(245, 245, 245)' ? '#e5e5e5' : '#f5f5f5';
        document.querySelector('footer').style.backgroundColor = document.querySelector('footer').style.backgroundColor === 'rgb(255, 255, 255)' ? '#f9f9f9' : '#fff';
    }, 3000);
});