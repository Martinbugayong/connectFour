// = ---> SETTING VALUE
// == ---> COMPARE (Expression, equates to true or false) (1 === true) is true
// === ---> COMPARES but STRICTER, must be same type. (1 === true) is false

/*----- constants -----*/
var player1 = 'r';
var player2 = 'y';
// /*----- app's state (variables) -----*/
var whosTurn;
var board;
var winner;

/*----- cached element references -----*/

/*----- event listeners -----*/
//Modify dom, select the board and add click event listener.
// var btn = document.querySelector('board')
//     btn.addEventListiner('click', click);


/*----- functions -----*/
function init() {
    board = [
        ['_', '_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_', '_']
    ]
    whosTurn = player1;
    winner = false;
}

//Define a variable expression and add an event listiner.
document.getElementById('col0').addEventListener('click', handleClick)
document.getElementById('col1').addEventListener('click', handleClick)
document.getElementById('col2').addEventListener('click', handleClick)
document.getElementById('col3').addEventListener('click', handleClick)
document.getElementById('col4').addEventListener('click', handleClick)
document.getElementById('col5').addEventListener('click', handleClick)
document.getElementById('col6').addEventListener('click', handleClick)

function handleClick(e) {
    var currentColumnId = e.currentTarget.id; // 'col2': string
    var currentColumnIndex = currentColumnId[3]; // '2': string
    var currentColumn = board[currentColumnIndex]; // ['y', 'y', 'r', '_', '_', '_']: array
    for (var i = 0; i < currentColumn.length; i++) { // currentColumn.length = 6
        // 0 1 2 3 4 5, loops 6 times
        if (currentColumn[i] === '_') { // y, y, r, r
            currentColumn[i] = whosTurn;
            switchTurn();
            return render();
        }
    }
}

// write a function to switch turns
function switchTurn() {
    if (whosTurn === player1) {
        whosTurn = player2
    } else {
        whosTurn = player1
    }
}

// if col0 was clicked then add disk to col0
// function that renders state board values onto dom board
function render() {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            // if slot is r log 'red', if slot is y log 'yellow'
            var slot = document.querySelectorAll(`#col${i} .row`)[j]
            if (board[i][j] === 'r') { // if the board coordinate is r then its red
                slot.innerHTML = '<div class="disc red"></div>' //'#col0 .row' returns array of rows inside current columng
            } else if (board[i][j] === 'y') { // if the board coordinate is not red hen its yellow
                slot.innerHTML = '<div class="disc yellow"></div>' //'#col0 .row' returns array of rows inside current columng
            } else { //if its not these things
                slot.innerHTML = '' //'#col0 .row' returns array of rows inside current columng
            }
        }
    }
}


init();
render();