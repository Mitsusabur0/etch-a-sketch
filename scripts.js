let container = document.querySelector(".container");

// let gridSize = prompt("What's the size of the square?");
let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    for (let i = 0; i < gridSize; i++) {
        let square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    }   
}

let squares = document.querySelectorAll(".square");

squares.forEach((sq) => {
    sq.style.backgroundColor = "white";
});