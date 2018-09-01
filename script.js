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
Array.from(document.getElementsByClassName("square")).forEach(
    function(e) {
    e.addEventListener("mouseenter", function(f) {
        f.target.style.color = "blue";
    });
});
