/*----- CONSTANTS (these will never change) -----*/
var player1 = 'r';
var player2 = 'y';

/*----- APP'S STATE (variables) -----*/ 
var whosTurn;
var grid;
var winner;

/*----- CACHED ELEMENT REFERENCES -----*/
var msgEl = document.getElementById('message');

/*----- EVENT LISTINERS -----*/
document.getElementById('grid').addEventListener('click', handleClick) //entire grid is clickable 

/*----- MAIN FUNCTIONS -----*/
function init() { // Create a function (initialize) with a grid array of columns(down) and rows(across) 
    grid = [
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

/*----- handle click -----*/
function handleClick(e) { // create function that handles clicking of the game grid.
    var colDiv = e.target.id ? e.target : e.target.parentElement; // setting colDiv to event target id ternary 
    var colIdx = parseInt(colDiv.id.replace('col', '')); //setting colIdx value
    var column = grid[colIdx]; // setting column to grid value of [colIdx]
    var firstAvalSlot = column.indexOf(null); // setting firstAvalSlot to the indexof column lookiong for (null)
    if (firstAvalSlot === -1) return; // if firstAvalSlot is equal to -1 (no slots avaliable)
    column[firstAvalSlot] = whosTurn; // setting whosTurn to column value of firstAvalSlot
    whosTurn = (whosTurn === player1) ? player2 : player1; // Ternary, setting whos turn to player 1 or 2. (Switch turn function)
    winner = getWinner(); // check for winner here
    render(); // render function out here 
}

/*----- render function -----*/
function render() {
    for (var i = 0; i < grid.length; i++) { // for loop that iterated through grid arrays (columns)
        var columnDivs = document.querySelectorAll(`#col${i} div`); // setting columnDivs to the column id and div number (coordinates)
        for (var j = 0; j < grid[i].length; j++) { // for loop setting var J to itterate through the grid[i].length which are the rows
            if (grid[i][j]) columnDivs[j].style.backgroundColor = grid[i][j] === 'r' ? 'red' : 'yellow'; // in JS styling for moves using ternary operator. 
        }
    }
    if (winner) { // winning messages 
        msgEl.innerHTML = 'Congrats, to player ' + (winner === player1 ? 'Red' : 'Yellow'); // if conditions have been met game renders this
    } else { // if no one wins
        msgEl.innerHTML = 'Player ' + (whosTurn === player1 ? '1\'s' : '2\'s') + ' Turn'; // then continue with the game setting whosTurn again. 

    }
}

function getWinner() { // winning game logic. 

}

init(); // calling initiate
render(); // calling render