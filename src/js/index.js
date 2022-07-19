const items = Array.from(document.querySelectorAll(".container .item"));
const indicator = document.getElementById("indicator");
const changePositionBtn = document.getElementById("changePositionBtn");

const indicatorPositions = [2.15, 8.15, 14.15, 20.15, 26.15];

let direction = "normal";

let currentIndicatorPosition = 1;

changePositionBtn.addEventListener("click", changeElement)

setInterval(changeElement, 1000);

function changeElement() {
    if (direction === "normal") {
        currentIndicatorPosition++;

        if (currentIndicatorPosition >= items.length) {
            direction = "reverse";
            currentIndicatorPosition--;
        }

        indicator.style.left = `${indicatorPositions[currentIndicatorPosition]}rem`;

        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains("selected")) {
                items[i].classList.remove("selected");
                items[currentIndicatorPosition].classList.add("selected");
            }
        }
    }

    if (direction === "reverse") {
        currentIndicatorPosition--;


        if (currentIndicatorPosition === 0) {
            direction = "normal";
        }

        indicator.style.left = `${indicatorPositions[currentIndicatorPosition]}rem`;

        items[currentIndicatorPosition].classList.add("selected");
        items[currentIndicatorPosition + 1].classList.remove("selected");
    }
    console.log(direction)
}