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

        //adds ability to draw in black and white
        gridSquare.addEventListener(`mouseover`, function bwMode(){
            gridSquare.style.backgroundColor = `black`;
        });

        //button that clears grid of color
        let clearButton = document.getElementById(`reset`);
        clearButton.addEventListener('click', function(){
        gridSquare.style.backgroundColor = null;
        });
    }
}


//loads page with default 16x16 slider
sizeSelector();