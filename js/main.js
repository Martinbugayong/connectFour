// = ---> SETTING VALUE
// == ---> COMPARE (Expression, equates to true or false) (1 === true) is true
// === ---> COMPARES but STRICTER, must be same type. (1 === true) is false

/*----- constants -----*/
// create your constant variables. These will never change. 
var player1 = 'r';
var player2 = 'b';
// /*----- app's state (variables) -----*/ 
var whosTurn;
var board;
var winner;

/*----- cached element references -----*/


/*----- functions -----*/
// Create an initialize function with a board array of columns and rows. 
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

/*----- event listeners -----*/
document.getElementById('col0').addEventListener('click', handleClick)
document.getElementById('col1').addEventListener('click', handleClick)
document.getElementById('col2').addEventListener('click', handleClick)
document.getElementById('col3').addEventListener('click', handleClick)
document.getElementById('col4').addEventListener('click', handleClick)
document.getElementById('col5').addEventListener('click', handleClick)
document.getElementById('col6').addEventListener('click', handleClick)

function handleClick(e) {
    var currentColumnId = e.currentTarget.id; // column id is set to current target clicked and will grab  the ID from the html
    var currentColumnIndex = currentColumnId[3]; // which ever column is selected will return 3rd indexed character in string 'col5' returns 5
    var currentColumn = board[currentColumnIndex]; // grabs the array that is selected 
    for (var i = 0; i < currentColumn.length; i++) { // currentColumn.length = 6
        // 0 1 2 3 4 5, loops 6 times
        if (currentColumn[i] === '_') { // b, b, r, r
            currentColumn[i] = whosTurn;
            switchTurn();
            return render();
        }
    }
}

// write a function to switch turns
function switchTurn() {
    if (whosTurn === player1) { //if whosTurn player 1 is true 
        whosTurn = player2 // then set it to player 2
    } else {
        whosTurn = player1 // else its set back to player 1
    }
}

// if col0 was clicked then add disk to col0
// function that renders state board values onto dom board
function render() {
    for (var i = 0; i < board.length; i++) { // for loop that goes through board
        for (var j = 0; j < board[i].length; j++) {
            // if slot is r log 'red', if slot is b log 'black'
            var slot = document.querySelectorAll(`#col${i} .row`)[j]
            if (board[i][j] === 'r') { // if the board coordinate is r then its red
                slot.innerHTML = '<div class="disc red"></div>' //'#col0 .row' returns array of rows inside current column
            } else if (board[i][j] === 'b') { // if the board coordinate is not red then its black
                slot.innerHTML = '<div class="disc black"></div>' //'#col0 .row' returns array of rows inside current column
            } else { //if its not these things
                slot.innerHTML = '' //'#col0 .row' returns array of rows inside current column
            }
        }
    }
}

/*----- win condition -----*/
I need to check for rows, columns, and diagonaly. 
using For loops, if statements and array indexing. 


init();
render();