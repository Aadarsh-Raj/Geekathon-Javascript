// Function to reload the game BUTTON
function reloadPage() {
  location.reload();
} 
//when this was inside the DOMload eventlistener, reload() didn't work.
//because DOMloader is loading and leaving it. while location.reload() needs to be declared globally.


document.addEventListener("DOMContentLoaded", () => {
 
    // Define the initial variables and game properties
    let board = []; // The game board
    let rows = 10; // Number of rows in the board
    let columns = 10; // Number of columns in the board

    let minesCount = 20; // Total number of mines in the game
    let minesLocation = []; // Array to store mine locations in the format "row-column"

    let tilesClicked = 0; // Counter to track the number of revealed tiles
    // let flagEnabled = false; // Flag mode to place or remove flags
    let gameOver = false; // Flag to track if the game is over

    const flagCount = document.getElementById("flags-count");
    console.log(flagCount);
    flagCount.innerText=minesCount;
    let flags = 0;

    // Function to set mines randomly on the board
    function setMines() {
        let minesLeft = minesCount;
        while (minesLeft > 0) { 
            let r = Math.floor(Math.random() * rows);
            let c = Math.floor(Math.random() * columns);
            let id = r.toString() + "-" + c.toString();

            if (!minesLocation.includes(id)) {
                minesLocation.push(id);
                minesLeft -= 1;
            }
        }
    }

    // Function to initialize the game when the window loads
    // window.onload = function() { OR this.onload = function(){
    //     startGame();
    // }
    let mcount = document.getElementById("mines-count")
    // Function to start the game
    function startGame() {
        // Display the initial number of mines
        mcount.innerText = minesCount;
        console.log(mcount);
        // Add event listener to the flag button
        // document.getElementById("flag-button").addEventListener("click", placeFlag);
        // Set mines on the board
        setMines();

        // Populate the game board
        for (let r = 0; r < rows; r++) {
            let row = [];
            for (let c = 0; c < columns; c++) {
                // Create a div element for each tile on the board
                let tile = document.createElement("div");

                tile.id = r.toString() + "-" + c.toString();
                tile.addEventListener("click", clickTile);
                
                //right click functionality
                tile.addEventListener("contextmenu", placeFlag);
                // tile.addEventListener("contextmenu", placeFlag);
                document.getElementById("board").append(tile);
                row.push(tile);
            }
            board.push(row);
        }
    }
// //right click flagging
//     function placeFlag(event) {
//         event.preventDefault();
    
//         if (gameOver || this.classList.contains("tile-clicked")) {
//           return;
//         }
    
//         let tile = this;
    
//         if (tile.innerText === "") {
//           tile.innerText = "🚩";
//         } else if (tile.innerText === "🚩") {
//           tile.innerText = "";
//         }
//       }
//     // left click tile
//       function clickTile(event) {
//         if (event.button === 2) {
//           placeFlag.call(this, event);
//         } else {
//           if (gameOver || this.classList.contains("tile-clicked")) {
//             return;
//           }
    
//           let tile = this;
    
//           if (tile.innerText === "") {
//             if (minesLocation.includes(tile.id)) {
//               gameOver = true;
//               revealMines();
//               return;
//             }
    
//             let coords = tile.id.split("-");
//             let r = parseInt(coords[0]);
//             let c = parseInt(coords[1]);
//             checkMine(r, c);
//           }
//         }
//       }
//^^^^^^^^^^^^^^^^^^
function placeFlag(event) {
    event.preventDefault();
    for(let f=0; f<20;f++)

    console.log(this);
    if (gameOver || this.classList.contains("tile-clicked")) {
      return;
    }

    let tile = this;
    
    if (tile.innerText === "" && (minesCount-flags)>0) 
    {
      tile.innerText = "🚩";
      flags++;
      flagCount.innerText = minesCount - flags;
      console.log(flagCount.innerText);
    } 
    else 
        if (tile.innerText === "🚩") 
        {
            tile.innerText = "";
            flags--;
            flagCount.innerText = minesCount - flags;
        }
  }

  function clickTile(event) {
    if (event.button === 2) {
      placeFlag.call(this, event);
    } else {
      if (gameOver || this.classList.contains("tile-clicked")) {
        
        return;
      }

      let tile = this;

      if (tile.innerText === "") {
        if (minesLocation.includes(tile.id)) {
          gameOver = true;
          revealMines();
          let gif = document.getElementsByClassName("gameOver")[0];
          console.log(gif);
          setTimeout(() => gif.style.display = "flex", 1000);
          return;
        }

        let coords = tile.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        checkMine(r, c);
      }
    }
  }
    // Function to reveal all mines at the end of the game
    function revealMines() {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                let tile = board[r][c];
                if (minesLocation.includes(tile.id)) {
                    tile.innerText = "💣";
                    tile.style.backgroundColor = "red";                
                }
            }
        }
    }

    // Recursive function to check neighboring tiles for mines
    function checkMine(r, c) {
        // Check boundaries
        if (r < 0 || r >= rows || c < 0 || c >= columns) {
            return;
        }
        if (board[r][c].classList.contains("tile-clicked")) {
            return;
        }

        // Mark tile as clicked and increment the counter
        board[r][c].classList.add("tile-clicked");
        tilesClicked += 1;

        let minesFound = 0;

        // Check neighboring tiles for mines
        minesFound += checkTile(r - 1, c - 1);
        minesFound += checkTile(r - 1, c);
        minesFound += checkTile(r - 1, c + 1);
        minesFound += checkTile(r, c - 1);
        minesFound += checkTile(r, c + 1);
        minesFound += checkTile(r + 1, c - 1);
        minesFound += checkTile(r + 1, c);
        minesFound += checkTile(r + 1, c + 1);

        // If neighboring mines found, display the count
        if (minesFound > 0) {
            board[r][c].innerText = minesFound;
            board[r][c].classList.add("x" + minesFound.toString());
        } 
        else {
            // No mines found in the neighboring tiles, continue checking recursively
            board[r][c].innerText = "";
            checkMine(r - 1, c - 1);
            checkMine(r - 1, c);
            checkMine(r - 1, c + 1);
            checkMine(r, c - 1);
            checkMine(r, c + 1);
            checkMine(r + 1, c - 1);
            checkMine(r + 1, c);
            checkMine(r + 1, c + 1);
        }

        // Check if all non-mine tiles are clicked
        if (tilesClicked == rows * columns - minesCount) {
            document.getElementById("mines-count").innerText = "Cleared";
            gameOver = true;
        }
    }

    // Function to check if a tile contains a mine
    function checkTile(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= columns) {
            return 0;
        }
        if (minesLocation.includes(r.toString() + "-" + c.toString())) {
            return 1;
        }
        return 0;
    }

startGame(); //if we put this on top of the code then the content will not load. It loads only after HTML is rendered.

});



//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// or, use 
// Function to initialize the game when the window loads
// window.onload = function() {
//     startGame();
// }
// INSTEAD OF__________________________________________
//  remove document.addEventListener("DOMContentLoaded", () => { 
// full js
// startGame();
// });

// putting all my functions inside DOMloader eventlistner will make sure
//that my code is loaded and kept once, untilDOM is loaded.
//so if i call a function declared in DOMloader, out in HTML, it didn't work.