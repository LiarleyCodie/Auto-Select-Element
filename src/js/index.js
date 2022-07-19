const items = Array.from(document.querySelectorAll(".container .item"));
const indicator = document.getElementById("indicator");
const changePositionBtn = document.getElementById("changePositionBtn");

const indicatorPositions = [2.15, 8.15, 14.15, 20.15, 26.15];

let currentIndicatorPosition = 1;

changePositionBtn.addEventListener("click", function () {
    currentIndicatorPosition++;

    if (currentIndicatorPosition >= items.length) {
        currentIndicatorPosition = 0;
    }

    indicator.style.left = `${indicatorPositions[currentIndicatorPosition]}rem`;

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains("selected")) {
            items[i].classList.remove("selected");
            items[currentIndicatorPosition].classList.add("selected");
        }
    }
})