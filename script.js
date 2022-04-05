const updateButton = document.querySelector(".update");
const clearButton = document.querySelector(".clear");
let currentSize = 15;

updateButton.addEventListener("click", event => { // Add event listener to the size button
    deconstructCanvas();
    populateCanvas(selectSize(prompt("Enter a number from 1 to 100.")));
});
clearButton.addEventListener("click", event => {
    deconstructCanvas();
    populateCanvas(currentSize);
})

function populateCanvas(size) { // Adds divs to the canvas according to the size set by the user (15x15 by default)
    const canvas = document.querySelector("#canvas");
    for(let i = 0; i < (size*size); i++) {
        let tile = document.createElement("div");
        tile.style.height = `${100/size}%`;
        tile.style.width = `${100/size}%`;
        canvas.appendChild(tile);

        tile.addEventListener("mouseover", event => { // Assigns a random RGB value when the user hovers over one of the divs
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            event.target.style.backgroundColor = `rgb(${red} ${green} ${blue})`
            console.log(event);
        });
    }
}

function deconstructCanvas() { // Just destroys all divs in the canvas
    const divs = document.querySelectorAll("#canvas > div");
    divs.forEach(div => {
        div.remove();
    });
}

function selectSize(input) {
    if(Number(input) <= 100 && Number(input) != NaN) {
        currentSize = Number(input);
        return currentSize
    } else {populateCanvas(selectSize(prompt("Entry must be a number from 1 to 100, please try again.")))}
    
}

function reset(size) {
    deconstructCanvas();
    populateCanvas(currentSize);
}

populateCanvas(15);