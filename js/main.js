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
var msgEl = document.getElementById('message');

/*----- functions -----*/
// Create an initialize function with a board array of columns and rows. 
function init() {
    board = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ]
    whosTurn = player1;
    winner = false;
}

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleClick)
// document.getElementById('col0').addEventListener('click', handleClick)
// document.getElementById('col1').addEventListener('click', handleClick)
// document.getElementById('col2').addEventListener('click', handleClick)
// document.getElementById('col3').addEventListener('click', handleClick)
// document.getElementById('col4').addEventListener('click', handleClick)
// document.getElementById('col5').addEventListener('click', handleClick)
// document.getElementById('col6').addEventListener('click', handleClick)

function handleClick(e) {
    var colDiv = e.target.id ? e.target : e.target.parentElement;
    var colIdx = parseInt(colDiv.id.replace('col', ''));
    var column = board[colIdx];
    var firstAvalSlot = column.indexOf(null);
    if (firstAvalSlot === -1) return;
    column[firstAvalSlot] = whosTurn; 
    whosTurn = (whosTurn === player1) ? player2 : player1;
    /*----- check for winner -----*/
    winner = getWinner();
    render();
}

// write a function to switch turns
// function switchTurn() {
//     if (whosTurn === player1) { //if whosTurn player 1 is true 
//         whosTurn = player2 // then set it to player 2
//     } else {
//         whosTurn = player1 // else its set back to player 1
//     }
//     document.getElementById('message').innerHTML = "It's " + whosTurn + ' turn...'
// }

// if col0 was clicked then add disk to col0
// function that renders state board values onto dom board
function render() {
    for (var i = 0; i < board.length; i++) { // for loop that goes through board
        var columnDivs = document.querySelectorAll(`#col${i} div`);
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j]) columnDivs[j].style.backgroundColor = board[i][j] === 'r' ? 'red' : 'black';
            // if slot is r log 'red', if slot is b log 'black'
            // if (board[i][j] === 'r') { // if the board coordinate is r then its red
            //     slot.innerHTML = '<div class="disc red"></div>' //'#col0 .row' returns array of rows inside current column
            // } else if (board[i][j] === 'b') { // if the board coordinate is not red then its black
            //     slot.innerHTML = '<div class="disc black"></div>' //'#col0 .row' returns array of rows inside current column
            // } else { //if its not these things
            //     slot.innerHTML = '' //'#col0 .row' returns array of rows inside current column
            // }
        }
    }
    if (winner) {
        msgEl.innerHTML = 'Congrats, to player ' + (winner === player1 ? 'Red' : 'Black'); 
    } else {
        msgEl.innerHTML = 'Player\'s ' + (whosTurn === player1 ? 'Red' : 'Black') + ' Turn'; 

    }
}

function getWinner() {

}

/*----- win condition -----*/
// I need to check for rows, columns, and diagonaly    
// using For loops, if statements and array indexing.
// var x = [
//     ["a", "b", "c"], 
//     ["d", "e", "f"], 
//     ["g", "h", "i"]
// ]

// for (var row=2; row >=0; row--) {
//     for (col=0; col < 3; col++) {
//         console.log(`Coordinates are (${col}, ${row})`)
//         console.log(x[row][col])
//     }
// }


init();
render();