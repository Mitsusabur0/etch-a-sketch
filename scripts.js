let container = document.querySelector(".container");




let submitSquares = document.querySelector("#example");

// Creates the grid for canvas from input, fires after click event
submitSquares.addEventListener("click", () => {
    container.innerHTML = "";
    let text = document.querySelector("#squaresNumber");
    gridSize = text.value;
    // console.log(gridSize);
    for (let i = 0; i < gridSize; i++) {
        for (let i = 0; i < gridSize; i++) {
            let square = document.createElement("div");
            square.className = "square";
            container.appendChild(square);
        }   
    }
    let squares = document.querySelectorAll(".square");
    squares.forEach((sq) => {
        sq.style.backgroundColor = "black";
    }); 
})





