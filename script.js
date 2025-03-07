const slides = document.querySelector('.slides');
let index = 0;

setInterval(() => {
    index++;
    if (index === 6) {
        index = 0;
    }
    slides.style.transform = `translateX(${-index * 16.666}%)`;
}, 3000);


window.onload = function () {
    window.scrollTo(0, 0);
};
