const carousel = document.querySelector(".carousel");
card = carousel.querySelectorAll(".card");
firstCard = carousel.querySelectorAll(".card")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

const input = document.getElementsByClassName(".input");
let min = 0;
let max = 10;

let isDragStart = false, prevPageX, prevScrollLeft;
let firstCardWidth = firstCard.clientWidth + 14;
console.log(firstCardWidth, "First card width");
console.log(firstCard.clientWidth,"Client Width");
console.log(firstCard.offsetWidth);

console.log((carousel.querySelectorAll(".card")[1]).clientWidth,"Client Width");

let scrollWidth = carousel.scrollWidth - carousel.clientHeight;
console.log(scrollWidth,"Scroll Width");

const showHideIcons = () => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    console.log(scrollWidth, "Scroll Width");
    console.log(carousel.scrollLeft, "Carousel Scroll left");
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", (e) => {
        carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth;
        e.preventDefault();
        // setTimeout(() => showHideIcons(), 60);
    });
});

function plus(idname){
    var quantity = document.getElementById(idname);
    let val = quantity.value;
    if(val<max)
        val++;
    quantity.value = val;
}
function minus(idname){
    var quantity = document.getElementById(idname);
    let val = quantity.value;

    if (val > 0) {
    	val--;
    	quantity.value = val;
    }
}