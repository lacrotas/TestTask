let offset = 0;
let activeSlide = 0;
const sliderLine = document.querySelector('.slider');
const points = document.querySelector('.slider_counter');
const buttonContainer = document.querySelector('.article_buttonContainer');

document.querySelector('.slider_button').addEventListener('click', function () {
    offset -= 100;
    if (offset < -400) { offset = 0 }
    sliderLine.style.left = offset + '%';
    setActiveSlide();
});

function setActiveSlide() {
    if (activeSlide == 4) {
        activeSlide = 0;
    } else {
        activeSlide++;
    }
    for (let i = 0; i < 5; i++) {
        points.children[i].className = "point";
    }
    buttonContainer.style.display ='none';
    points.children[activeSlide].className = "pointActive";
    setTimeout(() => {  
        buttonContainer.style.display = 'block';
    }, 900);
}
