const cells = document.querySelectorAll('.cell')
const score = document.querySelector('.score')
const crossScore = document.querySelector('.crossScore')
const circleScore = document.querySelector('.circleScore')

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
    if(gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] != ''){
        winner = gameBoard[0]
        return winner
    }

    // ['', '', '',
    // 'x', 'x', 'x',
    // '', '', ''];
    else if(gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] != ''){
        winner = gameBoard[3]
        return winner
    }

    // ['', '', '',
    // '', '', '',
    // 'x', 'x', 'x'];
    else if(gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] != ''){
        winner = gameBoard[6]
        return winner
    }

    // ['x', '', '',
    // 'x', '', '',
    // 'x', '', ''];
    else if(gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] != ''){
        winner = gameBoard[0]
        return winner
    }

    // ['', 'x', '',
    // '', 'x', '',
    // '', 'x', ''];
    else if(gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] != ''){
        winner = gameBoard[1]
        return winner
    }

    // ['', '', 'x',
    // '', '', 'x',
    // '', '', 'x'];
    else if(gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] != ''){
        winner = gameBoard[2]
        return winner
    }

    // ['x', '', '',
    // '', 'x', '',
    // '', '', 'x'];
    else if(gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] != ''){
        winner = gameBoard[0]
        return winner
    }

    // ['', '', 'x',
    // '', 'x', '',
    // 'x', '', ''];
    else if(gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] != ''){
        winner = gameBoard[2]
        return winner
    }

    else if(gameBoard[0] != '' && gameBoard[1] != '' && gameBoard[2] != '' && gameBoard[3] != '' && gameBoard[4] != '' && gameBoard[5] != '' && gameBoard[6] != '' && gameBoard[7] != '' && gameBoard[8] != ''){
        winner = 'tie'
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
            cross.style.filter = 'none'
            circle.style.filter = "invert(34%) sepia(72%) saturate(3607%) hue-rotate(340deg) brightness(81%) contrast(99%)"
        }
        else if (gameBoard[cell.dataset.num] == '' && turn === 'o'){
            gameBoard[cell.dataset.num] = 'o'
            displayBoard(gameBoard)
            turn = 'x'
            circle.style.filter = 'none'
            cross.style.filter = "invert(34%) sepia(72%) saturate(3607%) hue-rotate(340deg) brightness(81%) contrast(99%)"
        }
        checkWinState(gameBoard)
        if(checkWinState(gameBoard) == 'x'){
            crossScore.textContent = parseInt(crossScore.textContent) + 1;
            gameBoard = ['', '', '',
            '', '', '',
            '', '', ''];
            cells.forEach(cell =>{
                cell.innerHTML = ''
            })
            turn = 'x'
            circle.style.filter = 'none'
            cross.style.filter = "invert(34%) sepia(72%) saturate(3607%) hue-rotate(340deg) brightness(81%) contrast(99%)"
        }
        else if(checkWinState(gameBoard) == 'o'){
            circleScore.textContent = parseInt(circleScore.textContent) + 1;
            gameBoard = ['', '', '',
            '', '', '',
            '', '', ''];
            cells.forEach(cell =>{
                cell.innerHTML = ''
            })
            turn = 'x'
            circle.style.filter = 'none'
            cross.style.filter = "invert(34%) sepia(72%) saturate(3607%) hue-rotate(340deg) brightness(81%) contrast(99%)"            
        }
        else if (checkWinState(gameBoard) == 'tie'){
            gameBoard = ['', '', '',
            '', '', '',
            '', '', ''];
            cells.forEach(cell =>{
                cell.innerHTML = ''
            })
            turn = 'x'
            circle.style.filter = 'none'
            cross.style.filter = "invert(34%) sepia(72%) saturate(3607%) hue-rotate(340deg) brightness(81%) contrast(99%)" 
        }
    })
});

score.addEventListener('click', () => {
    gameBoard = ['', '', '',
                 '', '', '',
                 '', '', ''];
    cells.forEach(cell =>{
        cell.innerHTML = ''
    })
    turn = 'x'
    circle.style.filter = 'none'
    cross.style.filter = "invert(34%) sepia(72%) saturate(3607%) hue-rotate(340deg) brightness(81%) contrast(99%)"
    crossScore.textContent = 0
    circleScore.textContent = 0
})