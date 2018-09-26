// Dynamically create grid
function createGrid(num) {
    for (var i = 0; i < num*num; i++) {
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('square');
        document.getElementById('grid-container').appendChild(makeDiv);
    }
}

// Find all squares and add red color when hovered
Array.from(document.getElementsByClassName("square")).forEach(
    function(e) {
        e.addEventListener("mouseenter", function() {
            e.classList.add("darken");
    });
});

function clearBoard() {
    window.location.reload();
}

function resize() {
    userInput = prompt("What would you like to resize to?");
    console.log(userInput);
}

let userInput = 10;
createGrid(userInput);