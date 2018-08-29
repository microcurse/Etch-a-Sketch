// Dynamically create grid
function createGrid() {
    for (var i = 0; i < 256; i++) {
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('square');
        makeDiv.setAttribute("id", "square");
        document.getElementById('container').appendChild(makeDiv);
    }
}
createGrid();
const squares = document.getElementsByClassName("square");
squares.forEach((square) => {
    squares.addEventListener("mouseenter", function(e) {
        e.target.style.color = "blue";
    });
});