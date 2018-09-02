// Dynamically create grid
function createGrid() {
    for (var i = 0; i < 256; i++) {
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('square');
        // makeDiv.setAttribute("id", "square");
        document.getElementById('grid-container').appendChild(makeDiv);
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
// Find all squares and remove red color when unhovered
Array.from(document.getElementsByClassName("square")).forEach(
    function(e) {
        e.addEventListener("mouseleave", function() {
            e.classList.remove("darken");
    });
});