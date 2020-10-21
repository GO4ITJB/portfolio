const image = document.querySelector('.hero__img');
const images = ["img/landing.jpg", "img/1.jpg", "img/2.jpg", "img/3.jpg"];
let currentPos = 0;

const changePic = () => {
    if (++currentPos >= images.length)
        currentPos = 0;

    image.src = images[currentPos];
}

setInterval(changePic, 750);

