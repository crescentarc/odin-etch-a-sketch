let gridContainer = document.querySelector('#grid-container')

//allows one to change dimensions of grid with slider
function sizeSelector (){
    let input = document.querySelector(`#input`);
    let display = document.querySelector(`#display`);
    display.innerText = input.value + `x` + input.value;

    //displays current dimensions next to slider (changes as mouse is held down)
    input.oninput = function() {
        display.innerText = input.value + `x` + input.value;
    }

    //clears out current grid and updates dimensions (changes once mouse is released)
    input.onchange = function() {
        gridContainer.innerHTML = ``;
        let size = input.value;
        createGrid(size);
    }

    let size = input.value;
    createGrid(size);
}

//generates grid (dimensions are 16x16 by default based on range slider)
function createGrid(size){

    let gridContainer = document.querySelector(`#grid-container`);

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divCount = size * size;

    for(let i=0; i < divCount; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.style.border = `1px solid grey`;
        gridSquare.classList.add(`grid-square`);
        gridContainer.insertAdjacentElement(`beforeend`, gridSquare);

        //eventlistener for div coloring with mouse, using below colorSquare function
        gridSquare.addEventListener(`mouseover`, colorSquare);

        //button that clears grid of color
        let clearButton = document.getElementById(`reset`);
        clearButton.addEventListener(`click`, function(){
        gridSquare.style.backgroundColor = null;
        });
    }
}


//loads page with default 16x16 slider
sizeSelector();

//button eventlistener to set color mode; also sets default mode to black/white
let color = `black`;
let bwButton = document.getElementById(`bw`);
let colorButton = document.getElementById(`color`);
bwButton.addEventListener(`click`, function() {
    color = `black`;
});
colorButton.addEventListener(`click`, function() {
    color = `random`;
});

//function which changes grid color depending on mode
function colorSquare() {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    if(color == 'random'){
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    else{
        this.style.backgroundColor = `black`;
        document.getElementById(`bw`).style.backgroundColor = `green`;
    }
}


//current color mode indicated with corresponding button color in green
bwButton.addEventListener(`click`, function(){
    this.style.backgroundColor = `green`;
    colorButton.style.backgroundColor = null;
});
colorButton.addEventListener(`click`, function(){
    this.style.backgroundColor = `green`;
    bwButton.style.backgroundColor = null;
});

