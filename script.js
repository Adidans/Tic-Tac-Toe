const cells = document.querySelectorAll('.cell')
let topLeft = document.getElementById('topLeft')
let topMid = document.getElementById('topMid')
let topRight = document.getElementById('topRight')
let midLeft = document.getElementById('midLeft')
let mid = document.getElementById('mid')
let midRight = document.getElementById('midRight')
let botLeft = document.getElementById('botLeft')
let botMid = document.getElementById('botMid')
let botRight = document.getElementById('botRight')

let turn = 'x';
let winner;

let gameBoard = ['', '', '',
                 '', '', '',
                 '', '', ''];

const circle = document.getElementById('circle')
const cross = document.getElementById('cross')
cross.style.filter = "invert(34%) sepia(72%) saturate(3607%) hue-rotate(340deg) brightness(81%) contrast(99%)"

function checkWinState(gameBoard) {
    // ['x', 'x', 'x',
    //  '', '', '',
    //  '', '', ''];
    if(gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]){
        winner = gameBoard[0]
        return winner
    }

    // ['', '', '',
    // 'x', 'x', 'x',
    // '', '', ''];
    if(gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]){
        winner = gameBoard[3]
        return winner
    }

    // ['', '', '',
    // '', '', '',
    // 'x', 'x', 'x'];
    if(gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]){
        winner = gameBoard[6]
        return winner
    }

    // ['x', '', '',
    // 'x', '', '',
    // 'x', '', ''];
    if(gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]){
        winner = gameBoard[0]
        return winner
    }

    // ['', 'x', '',
    // '', 'x', '',
    // '', 'x', ''];
    if(gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]){
        winner = gameBoard[1]
        return winner
    }

    // ['', '', 'x',
    // '', '', 'x',
    // '', '', 'x'];
    if(gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]){
        winner = gameBoard[2]
        return winner
    }

    // ['x', '', '',
    // '', 'x', '',
    // '', '', 'x'];
    if(gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]){
        winner = gameBoard[0]
        return winner
    }

    // ['', '', 'x',
    // '', 'x', '',
    // 'x', '', ''];
    if(gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]){
        winner = gameBoard[2]
        return winner
    }
}

function displayBoard(gameBoard) {
    cells.forEach(cell =>{
        cell.innerHTML = ''
    })
    for (let i = 0; i < gameBoard.length; i++) {
        if(gameBoard[i] == 'x'){
            let cross = document.createElement('img')
            cross.src = "crossYellow.svg"
            cross.classList.add('crossYellow')
            cells[i].appendChild(cross)
        }
        else if(gameBoard[i] == 'o'){
            let circle = document.createElement('img')
            circle.src = "circleGreen.svg"
            circle.classList.add('circleGreen')
            cells[i].appendChild(circle)
        }
    }
}

cells.forEach(cell => {
    cell.addEventListener('click', () =>{
        if(gameBoard[cell.dataset.num] == '' && turn === 'x'){
            gameBoard[cell.dataset.num] = 'x'
            displayBoard(gameBoard)
            turn = 'o'
        }
        else if (gameBoard[cell.dataset.num] == '' && turn === 'o'){
            gameBoard[cell.dataset.num] = 'o'
            displayBoard(gameBoard)
            turn = 'x'
        }
        checkWinState(gameBoard)
    })
});