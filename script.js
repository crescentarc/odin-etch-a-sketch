const gridContainer = document.querySelector('#grid-container');


for (let i = 1; i < 257; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.style = 'border: 1px solid black; height: 25px; width: 25px; background-color: white';
    gridSquare.classList.add('grid-square') 
    gridContainer.appendChild(gridSquare);
}



