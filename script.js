let tableSize = 80;
const container = document.querySelector(".container");

for (j = 0; j < tableSize; j++) {
    const rowElement = document.createElement("div")
    rowElement.classList.add("row");
    for (i = 0; i < tableSize; i++) {
        const squareElement = document.createElement("div")
        squareElement.classList.add("square");
        rowElement.appendChild(squareElement);
    }
    container.appendChild(rowElement);
}