let colorModeStatus = "default";

// Dynamically create grid
function createGrid(squaresPerSide = 16) {
    const container = document.querySelector('#grid-container');
    let makeDiv;
    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, auto)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, auto)`;

    for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
        makeDiv = document.createElement('div');
        makeDiv.classList.add('square');
        makeDiv.setAttribute('id', 'square' + i);
        container.append(makeDiv);
    };
    setSquareListeners();
}

// Listen for when mouse hovers over a square
function setSquareListeners() {
    const squares = document.querySelectorAll('.square');
    let square;
    squares.forEach((square) => {
        square.addEventListener('mouseenter', (e) => {
            square.style.background = colorMode(e);
        });
    });
}

function colorMode(e) {
    if (colorModeStatus == "default") {
        return "rgb(" + 128 + "," + 128 + "," + 128 + ")";

    } else if (colorModeStatus == "color") {
        let R, G, B;
        R = Math.round(Math.random() * 256);
        G = Math.round(Math.random() * 256);
        B = Math.round(Math.random() * 256);
        rgbString = "rgb(" + R + "," + G + "," + B + ")";
        return rgbString;

    } else if (colorModeStatus == "transparent") {
        currentColor = e.target['style']['background-color'];

        if (currentColor) {
            asString = currentColor.slice(4, -1).split(',')
            justTheNumber = parseInt(asString)
            newNumber = (justTheNumber - 32 >= 0) ? justTheNumber - 32 : 0;
            rgbString = "rgb(" + newNumber + "," + newNumber + "," + newNumber + ")";
            return rgbString;
            
        } else {
            return "rgb(" + 224 + "," + 224 + "," + 224 + ")";
        }
    } 
};

createGrid();

function setColorMode(e) {
    colorModeStatus = e.target['id'];
}

function reset(e) {
    squaresPerSide = prompt("What would you like to resize to?");
    createGrid(squaresPerSide);
}

const buttonReset = document.querySelector("#reset");
buttonReset.addEventListener('click', reset);

const buttonColor = document.querySelector('#color');
buttonColor.addEventListener('click', setColorMode);

const buttonTransparent = document.querySelector('#transparent');
buttonTransparent.addEventListener('click', setColorMode);

const buttonDefault = document.querySelector('#default');
buttonDefault.addEventListener('click', setColorMode);