# Connect 4 plan

# MVP
- Game board 
- Turns
- Win conditions 

# _Bonus (if time allows)_ 
- Name setter
- Color picker  
- Keyboard and mouse compatability 

# MVP 
### 1. Game Board 
- Colums of 7 and rows of 6 (Array)
- The tiles will be able to become the color the player is assigned
- Ensuring a (stacking) feature so players can not change the color of an opponents placement
- Ensuring placement accuracy
- If column is full becomes disabled

### 2. Turns 
- Player 1 will always go first 
- Will always alternate until win conditions have been met 
- Will display winning player prompt 

### 3. Win conditions 
- 4 in a row, column, or diagonally
- In an event of a tie game players will be able to reset the board 

# _Bonus (if time allows)_

### Turns 
- Timer of 3 seconds per turn to ensure fast games _(quick maths)_
- 1st turn randomizer 
    - Coin flip to determine who goes fist. 
        - Coin will be color coded acording to players selection
- score keeper 
- leaderboard
### Name setter 
- Enable a prompt or alert that has inputs and sets player's name accordingly

### Color picker 
- While the prompt of setting players name is up they will be able to choose the color of their liking. 
- RGB 

### Keyboard and mouse compatability 
- Arrow keys and mouse to make multiplayer easier 
- Highlighting colums to ensure player using arrow key's has accurate placement
- Pressing the down arrow will set the tile. 
 

some code that generates a board in javascript

Making div columns and rows in JS. avoiding hardcoding 7/6 grid 
var funLoop = function() {
    for (var i = 0; i < 7; i++) {
        var html = "<div class='column'>"
        for (var j= 0; j < 6; j++) {
            html += "<div class='row'>" + j + "</div>"
        }
        html+= i+ "<div>"
        return(html)
    }
}

then take the string and add this to a div with a class or id as the innerHTML
document.querySelector('#board).innerHTML = funLoop()

then add .css to format rows and columns, for things with class of row or column from display being either block or inline

creating the data for the board as an array of arrays
// var board = [
[0,1,2,3], [4,5,6,7], [8,9,10,11] ]
