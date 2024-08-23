let tableSize = 80;
const container = document.querySelector(".container");

for (j = 0; j < tableSize; j++) {
    const rowElement = document.createElement("div")
    rowElement.classList.add("row");
    for (i = 0; i < tableSize; i++) {
        const squareElement = document.createElement("div")
        squareElement.classList.add("square");
        squareElement.addEventListener("mouseover", () => {
            squareElement.addEventListener('mousedown', function () {
                alert("Hello World");
            });
        });
        rowElement.appendChild(squareElement);
    }
    container.appendChild(rowElement);
}
