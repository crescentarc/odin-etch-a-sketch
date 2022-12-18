//Establish constant for grid holding square divs
const gridContainer = document.querySelector('#grid-container');

//Initial loop which causes square divs to be created in gridContainer
for (let i = 1; i < 257; i++) {

    //Defines class, styles of square divs and properly adds them into gridContainer
    const gridSquare = document.createElement('div');
    gridSquare.style = 'border: 1px solid black; height: 25px; width: 25px; background-color: white';
    gridSquare.classList.add('grid-square') 
    gridContainer.appendChild(gridSquare);

    //EventListener for button which switches drawing mode to black and white
    const bwbutton = document.getElementById('bw-button');
    bwbutton.addEventListener('click', bwMode);

    //EventListener for reset button which exits black and white draw mode
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', bwMode);

    //Function that switches to black and white mode when bwbutton is pressed
    function bwMode() { 
        bwbutton.disabled = true;
        resetButton.innerText = 'Exit Black and White Mode'

        //Switches color of gridSquare when hovered over with mouse
        gridSquare.addEventListener('mouseover', () => {
            if (gridSquare.style.backgroundColor == 'white') {
                gridSquare.style.backgroundColor = 'black';
            } else if(gridSquare.style.backgroundColor == 'black') {
                gridSquare.style.backgroundColor = 'white';
            };
        });

        //Exit bwmode when Reset Button is pressed
        resetButton.addEventListener('click', () => {
            resetButton.disabled = true;
            bwbutton.disabled = false;
            resetButton.textContent = 'Reset';
            return; 
        })

        //re-enter bwmode when bwButton is pressed
        bwbutton.addEventListener('click', () => {
            resetButton.disabled = false;
            bwMode();
        })
    };

    //start in black and white mode by default upon loading page
    bwMode();
}; 





