function createGrid(size) {

    let gridContainer = document.querySelector(`#grid-container`);

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divCount = size * size;

    for(let i=0; i < divCount; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.style.border = `1px solid grey`;
        gridSquare.addEventListener(`mouseover`, function(){
            gridSquare.style.backgroundColor = `black`;
        });
        gridContainer.insertAdjacentElement(`beforeend`, gridSquare);
    }
}

createGrid(16);
