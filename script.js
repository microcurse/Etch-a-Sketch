// Dynamically create grid
function createGrid() {
    for (var i = 0; i < 256; i++) {
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('square');
        // makeDiv.setAttribute("id", "square");
        document.getElementById('container').appendChild(makeDiv);
    }
}
createGrid();

// Find all squares and add red color when hovered
Array.from(document.getElementsByClassName("square")).forEach(
    function(e) {
        e.addEventListener("mouseenter", function() {
            e.classList.add("darken");
    });
});