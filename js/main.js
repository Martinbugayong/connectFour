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
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', '']
    ]
    whosTurn = player1;
    winner = false;
}

/*----- handle click -----*/
function handleClick(e) { // create function that handles clicking of the game grid.
    var colDiv = e.target.id ? e.target : e.target.parentElement; // setting colDiv to event target id ternary 
    var colIdx = parseInt(colDiv.id.replace('col', '')); //setting colIdx value
    var column = grid[colIdx]; // setting column to grid value of [colIdx]
    var firstAvalSlot = column.indexOf(''); // setting firstAvalSlot to the indexof column lookiong for ('')
    if (firstAvalSlot === -1) return; // if firstAvalSlot is equal to -1 (no slots avaliable)
    column[firstAvalSlot] = whosTurn; // setting whosTurn to column value of firstAvalSlot
    winner = getWinner(); // check for winner here
    whosTurn = (whosTurn === player1) ? player2 : player1; // Ternary, setting whos turn to player 1 or 2. (Switch turn function)
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
        msgEl.innerHTML = `Congrats! ${(winner === player1 ? 'Red' : 'Yellow')} Player Wins!`; // if conditions have been met game renders this
    } else { // if no one wins
        msgEl.innerHTML = 'Player ' + (whosTurn === player1 ? '1\'s' : '2\'s') + ' Turn'; // then continue with the game setting whosTurn again. 

    }
}

function getWinner() { // winning game logic. 
    // check vertical
    for (var i = 0; i < grid.length; i++) {
        if (
            (grid[i][0] && grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2] && grid[i][0] === grid[i][3]) ||
            (grid[i][1] && grid[i][1] === grid[i][2] && grid[i][1] === grid[i][3] && grid[i][1] === grid[i][4]) ||
            (grid[i][2] && grid[i][2] === grid[i][3] && grid[i][2] === grid[i][4] && grid[i][2] === grid[i][5])
        ) {
            return whosTurn || winner;
        }
    }
    // check Horizontal
    for (var j = 0; j < grid[0].length; j++) {
        if (
            (grid[0][j] && grid[0][j] === grid[1][j] && grid[0][j] === grid[2][j] && grid[0][j] === grid[3][j]) ||
            (grid[1][j] && grid[1][j] === grid[2][j] && grid[1][j] === grid[3][j] && grid[1][j] === grid[4][j]) ||
            (grid[2][j] && grid[2][j] === grid[3][j] && grid[2][j] === grid[4][j] && grid[2][j] === grid[5][j]) ||
            (grid[3][j] && grid[3][j] === grid[4][j] && grid[3][j] === grid[5][j] && grid[3][j] === grid[6][j])
        ) {
            return whosTurn || winner;
        }
    }

    if (
        (grid[0][0] && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] === grid[3][3]) ||
        (grid[0][1] && grid[0][1] === grid[1][2] && grid[0][1] === grid[2][3] && grid[0][1] === grid[3][4]) ||
        (grid[0][2] && grid[0][2] === grid[1][3] && grid[0][2] === grid[2][4] && grid[0][2] === grid[3][5])
    ) {
        return whosTurn || winner;
    }
    
    if (
        (grid[1][0] && grid[1][0] === grid[2][1] && grid[1][0] === grid[3][2] && grid[1][0] === grid[4][3]) ||
        (grid[1][1] && grid[1][1] === grid[2][2] && grid[1][1] === grid[3][3] && grid[1][1] === grid[4][4]) ||
        (grid[1][2] && grid[1][2] === grid[2][3] && grid[1][2] === grid[3][4] && grid[1][2] === grid[4][5])
    ) {
        return whosTurn || winner;
    }
    
    if (
        (grid[2][0] && grid[1][0] === grid[2][1] && grid[1][0] === grid[3][2] && grid[1][0] === grid[4][3]) ||
        (grid[2][1] && grid[1][1] === grid[2][2] && grid[1][1] === grid[3][3] && grid[1][1] === grid[4][4]) ||
        (grid[2][2] && grid[1][2] === grid[2][3] && grid[1][2] === grid[3][4] && grid[1][2] === grid[4][5])
    ) {
        return whosTurn || winner;
    }
    
    if (
        (grid[3][0] && grid[3][0] === grid[4][1] && grid[3][0] === grid[5][2] && grid[3][0] === grid[6][3]) ||
        (grid[3][1] && grid[3][1] === grid[4][2] && grid[3][1] === grid[5][3] && grid[3][1] === grid[6][4]) ||
        (grid[3][2] && grid[3][2] === grid[4][3] && grid[3][2] === grid[5][4] && grid[3][2] === grid[6][5])
    ) {
        return whosTurn || winner;
    }
    // starting at bottom right [6][0]
    if (
        (grid[6][0] && grid[6][0] === grid[5][1] && grid[6][0] === grid[4][2] && grid[6][0] === grid[3][3]) ||
        (grid[6][1] && grid[6][1] === grid[5][2] && grid[6][1] === grid[4][3] && grid[6][1] === grid[3][4]) ||
        (grid[6][2] && grid[6][2] === grid[5][3] && grid[6][2] === grid[4][4] && grid[6][2] === grid[3][5])
    ) {
        return whosTurn || winner;
    }
    
    if (
        (grid[5][0] && grid[5][0] === grid[4][1] && grid[5][0] === grid[3][2] && grid[5][0] === grid[2][3]) ||
        (grid[5][1] && grid[5][1] === grid[4][2] && grid[5][1] === grid[3][3] && grid[5][1] === grid[2][4]) ||
        (grid[5][2] && grid[5][2] === grid[4][3] && grid[5][2] === grid[3][4] && grid[5][2] === grid[2][5])
    ) {
        return whosTurn || winner;
    }
    
    if (
        (grid[4][0] && grid[4][0] === grid[3][1] && grid[4][0] === grid[2][2] && grid[4][0] === grid[1][3]) ||
        (grid[4][1] && grid[4][1] === grid[3][2] && grid[4][1] === grid[2][3] && grid[4][1] === grid[1][4]) ||
        (grid[4][2] && grid[4][2] === grid[3][3] && grid[4][2] === grid[2][4] && grid[4][2] === grid[1][5])
    ) {
        return whosTurn || winner;
    }
    
    if (
        (grid[3][0] && grid[3][0] === grid[2][1] && grid[3][0] === grid[1][2] && grid[3][0] === grid[0][3]) ||
        (grid[3][1] && grid[3][1] === grid[2][2] && grid[3][1] === grid[1][3] && grid[3][1] === grid[0][4]) ||
        (grid[3][2] && grid[3][2] === grid[2][3] && grid[3][2] === grid[1][4] && grid[3][2] === grid[0][5])
    ) {
        return whosTurn || winner;
    }
    // starting top left corner 
    
    if (
        (grid[0][5] && grid[0][5] === grid[1][4] && grid[0][5] === grid[2][3] && grid[0][5] === grid[3][2]) ||
        (grid[0][4] && grid[0][4] === grid[1][3] && grid[0][4] === grid[2][2] && grid[0][4] === grid[3][1]) ||
        (grid[0][3] && grid[0][3] === grid[1][2] && grid[0][3] === grid[2][1] && grid[0][3] === grid[3][0])
    ) {
        return whosTurn || winner;
    }
    if (
        (grid[1][5] && grid[1][5] === grid[2][4] && grid[1][5] === grid[3][3] && grid[1][5] === grid[4][2]) ||
        (grid[1][4] && grid[1][4] === grid[2][3] && grid[1][4] === grid[3][2] && grid[1][4] === grid[4][1]) ||
        (grid[1][3] && grid[1][3] === grid[2][2] && grid[1][3] === grid[3][1] && grid[1][3] === grid[4][0])
    ) {
        return whosTurn || winner;
    }
    if (
        (grid[2][5] && grid[2][5] === grid[3][4] && grid[2][5] === grid[4][3] && grid[2][5] === grid[5][2]) ||
        (grid[2][4] && grid[2][4] === grid[3][3] && grid[2][4] === grid[4][2] && grid[2][4] === grid[5][1]) ||
        (grid[2][3] && grid[2][3] === grid[3][2] && grid[2][3] === grid[4][1] && grid[2][3] === grid[5][0])
    ) {
        return whosTurn || winner;
    }
    
    if (
        (grid[3][5] && grid[3][5] === grid[4][4] && grid[3][5] === grid[5][3] && grid[3][5] === grid[6][2]) ||
        (grid[3][4] && grid[3][4] === grid[4][3] && grid[3][4] === grid[5][2] && grid[3][4] === grid[6][1]) ||
        (grid[3][3] && grid[3][3] === grid[4][2] && grid[3][3] === grid[5][1] && grid[3][3] === grid[6][0])
    ) {
        return whosTurn || winner;
    }
    // starting tip R corner diagonal at [6][6] 
    if (
        (grid[6][5] && grid[6][5] === grid[5][4] && grid[6][5] === grid[4][3] && grid[6][5] === grid[3][2]) ||
        (grid[6][4] && grid[6][4] === grid[5][3] && grid[6][4] === grid[4][2] && grid[6][4] === grid[3][1]) ||
        (grid[6][3] && grid[6][3] === grid[5][2] && grid[6][3] === grid[4][1] && grid[6][3] === grid[3][0])
    ) {
        return whosTurn || winner;
    }
    
    if (
        (grid[5][5] && grid[5][5] === grid[4][4] && grid[5][5] === grid[3][3] && grid[5][5] === grid[2][2]) ||
        (grid[5][4] && grid[5][4] === grid[4][3] && grid[5][4] === grid[3][2] && grid[5][4] === grid[2][1]) ||
        (grid[5][3] && grid[5][3] === grid[4][2] && grid[5][3] === grid[3][1] && grid[5][3] === grid[2][0])
    ) {
        return whosTurn || winner;
    }
    
    if (
        (grid[4][5] && grid[4][5] === grid[3][4] && grid[4][5] === grid[2][3] && grid[4][5] === grid[1][2]) ||
        (grid[4][4] && grid[4][4] === grid[3][3] && grid[4][4] === grid[2][2] && grid[4][4] === grid[1][1]) ||
        (grid[4][3] && grid[4][3] === grid[3][2] && grid[4][3] === grid[2][1] && grid[4][3] === grid[1][0])
    ) {
        return whosTurn || winner;
    }
    
    if (
        (grid[3][5] && grid[3][5] === grid[2][4] && grid[3][5] === grid[1][3] && grid[3][5] === grid[0][2]) ||
        (grid[3][4] && grid[3][4] === grid[2][3] && grid[3][4] === grid[1][2] && grid[3][4] === grid[0][1]) ||
        (grid[3][3] && grid[3][3] === grid[2][2] && grid[3][3] === grid[1][1] && grid[3][3] === grid[0][0])
    ) {
        return whosTurn || winner;
    }
    

}

init(); // calling initiate
render(); // calling render