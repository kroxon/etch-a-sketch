let btnSize = document.querySelector('#size');
btnSize.addEventListener("click", () => {
    let inputSize = parseInt(prompt("Set grid size from 4 to 100."));
    if (3 < inputSize && inputSize < 101)
        generateGrid(inputSize);
    else
        alert("Wrong value!")
});

const container = document.querySelector(".container");

function generateGrid(size = 16) {
    container.innerHTML = "";
    for (j = 0; j < size; j++) {
        const rowElement = document.createElement("div")
        rowElement.classList.add("row");
        for (i = 0; i < size; i++) {
            let squareElement = document.createElement("div")
            squareElement.classList.add("square");
            squareElement.addEventListener("mouseover", () => {
                if (trigger == true) {
                    decrementBackground(squareElement);
                }
            });
            rowElement.appendChild(squareElement);
        }
        container.appendChild(rowElement);
    }
}

// initialization
generateGrid();

// check if mouse is clicked
let trigger = false;
document.addEventListener('mousedown', function () {
    trigger = true;
});

document.addEventListener('mouseup', function () {
    trigger = false;
});

function decrementBackground(square) {
    let squareColor = window.getComputedStyle(square).backgroundColor;
    console.log(squareColor);
    const endIndex = squareColor.indexOf(',');
    let colorLevel = parseInt(squareColor.slice(4, endIndex));
    colorLevel = (colorLevel > 10) ? colorLevel - 30 : 0;
    square.style.backgroundColor = `rgb(${colorLevel}, ${colorLevel}, ${colorLevel})`;
}