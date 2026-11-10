const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

const slidesLine = document.getElementById("slideLine");

const points = document.getElementsByClassName("point");

let i = 0;

rightButton.addEventListener("click", function() {
    if(i != 4) {
        i++;
        slidesLine.style.left = `${i * -500}px`;
    }
})

leftButton.addEventListener("click", function() {
    if(i != 0) {
        i--;
        slidesLine.style.left = `${i * -500}px`;
    }
})