let move = "X"
function makeBoard() {
    move = "X";
    const board = document.querySelector(".tic-tac-toe");
    while (board.firstChild) {
        board.removeChild(board.lastChild)
    };
    for (let i = 0; i < 9; i++) {
        const emptySquare = document.createElement("div");
        emptySquare.className = "empty";
        board.append(emptySquare);
        emptySquare.addEventListener("click", () => makeMove(event.target));
    };
};

function makeMove(square) {
    if (square.className === "empty") {
        square.className = "square";
        if (move === "X") {
            square.innerText = move
            move = "O"
        } else {
            square.innerText = move
            move = "X"
        }
    }
}

function reset() {
    let restButton = document.querySelector("button");
    restButton.addEventListener("click", () => makeBoard());
};

makeBoard();
reset();