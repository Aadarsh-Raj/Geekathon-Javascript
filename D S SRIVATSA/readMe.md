# Minesweeper Game using JavaScript
[Play MineSweeper-Online](https://srivatsa007.github.io/Geekster-JS/MineSweeper-Geekathon2/)
This project is a simple implementation of the classic Minesweeper game using JavaScript.

____
![image](https://github.com/srivatsa007/Geekster-JS/assets/70172502/03afdbde-0282-4622-ad8a-ae9f7a3fc7eb)

___
## Table of Contents
- [How to play](#How_to_play)
- [Features](#Features)
- [JS concepts](#JavaScript_Concepts_Used_in_This_Project)
____
## How to Play

* Open the index.html file in your browser to start the game.
* Left-click tiles to reveal their content.
* Right-click tiles to place or remove flags.
* The goal is to reveal all tiles without clicking on any mines.
___
## Features


### Dynamically Generated Game Board

 * The game board is dynamically generated based on the specified number of rows and columns.
 * Tiles are created as clickable elements to interact with the game.

### Mine Placement
* Mines are randomly placed on the board at the start of the game.
* The number of mines is customizable.

### Flagging Mechanism
* Right-clicking on tiles places flags to mark potential mines.
* Flags can be toggled on or off by right-clicking again on the flagged tile.

### Tile Revealing
* Left-clicking on tiles reveals the content beneath.
* If a mine is revealed, the game ends, and all mines are displayed.

### Recursive Tile Checking
* Tiles are checked for adjacent mines when clicked.
* Recursive function to reveal neighboring tiles without adjacent mines.

### Game Over Detection
* The game ends when a mine is clicked, revealing all mine locations.
* Winning the game is detected when all non-mine tiles are revealed.

___
## JavaScript Concepts Used in This Project

### Event Handling
Event listeners are used to handle left-clicks, right-clicks, and tile interactions.
- **Example: Event Listener for Clicking Tiles**
    ```javascript
    // Function to handle left-click event on tiles
    function clickTile(event) {
        // Code handling tile click event
    }

    // Adding event listener for clicking tiles
    tile.addEventListener("click", clickTile);
    ```

### DOM Manipulation
The game board is dynamically generated and appended to the DOM using JavaScript.
- **Example: Creating and Appending Tiles to the Board**
    ```javascript
    // Creating a div element for each tile on the board
    let tile = document.createElement("div");
    tile.id = r.toString() + "-" + c.toString();
    tile.addEventListener("click", clickTile);
    document.getElementById("board").append(tile);
    ```

### Recursion
Recursive functions are used to reveal neighboring tiles without adjacent mines.
- **Example: Recursive Function for Checking Neighboring Tiles**
    ```javascript
    // Recursive function to check neighboring tiles for mines
    function checkMine(r, c) {
        // Code for checking neighboring tiles recursively
        // ...
        checkMine(r - 1, c - 1);
        checkMine(r - 1, c);
        // ...
    }
    ```

### Randomization
Random mine placement on the board is achieved using JavaScript's 
- **Example: Random Mine Placement**
    ```javascript
    // Function to set mines randomly on the board
    function setMines() {
        // Code for random mine placement
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        // ...
    }
    ```

### Game Logic
Implementation of game rules such as mine placement, flagging, and tile revealing.
- **Example: Game Over Detection**
    ```javascript
    // Function to reveal all mines at the end of the game
    function revealMines() {
        // Code to display all mines when the game ends
        // ...
    }
    ```
