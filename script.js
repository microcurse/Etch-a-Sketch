// Dynamically create grid
function createGrid() {
    for (var i = 0; i < 256; i++) {
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('square');
        document.getElementById('container').appendChild(makeDiv);
    }
}
createGrid();
const squares = document.getElementById("square");