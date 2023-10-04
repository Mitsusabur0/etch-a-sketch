let container = document.querySelector(".container");

// let square = document.createElement("div");
// square.innerText = "testing!";
let gridSize = prompt("What's the size of the square?");

for (let i = 0; i < gridSize; i++) {
    for (let i = 0; i < gridSize; i++) {
        let square = document.createElement("div");
        square.className = "square";
        container.appendChild(square);
    }   
}

