// Array of paragraphs for the typing test
const paragraphs = [
    "Climate is the average weather in a given area over a longer period of time. A description of a climate includes information on, e.g. the average temperature in different seasons, rainfall, and sunshine. Also a description of the (chance of) extremes is often included. Climate change is any systematic change in the long-term statistics of climate variables such as temperature, precipitation, pressure, or wind sustained over several decades or longer.",

    "In the quiet village nestled between rolling hills and meandering streams, time seemed to move at its own pace. The narrow cobblestone streets were lined with charming cottages adorned with colorful flowers, creating a picturesque scene straight out of a storybook. As the sun dipped below the horizon, casting a warm golden glow, the villagers gathered in the town square, sharing laughter and stories that echoed through the peaceful evening air.",

    "The old bookstore stood as a time capsule, its shelves filled with dusty volumes that whispered the tales of bygone eras. As sunlight streamed through the cracked windows, illuminating the dancing particles of dust, the scent of aged paper and ink hung in the air. Each book seemed to carry the weight of countless readers who had wandered through the aisles in search of knowledge, solace, or escape.",

    "High above the city skyline, the skyscrapers stood like colossal sentinels, their glass facades reflecting the ever-changing hues of the sunset. Down below, the hustle and bustle of urban life unfolded, with people rushing to and fro, lost in the rhythm of their daily routines. Amidst the concrete jungle, pockets of greenery offered a refuge, where nature defiantly persisted, a testament to the delicate balance between human progress and the resilience of the natural world.",

    "The aroma of freshly brewed coffee wafted through the air, creating a comforting ambiance in the bustling café. Soft jazz melodies played in the background, harmonizing with the murmur of conversations and the clinking of porcelain cups. Baristas expertly crafted intricate latte art, turning each cup into a canvas of frothy masterpieces. In the cozy corner, a group of friends engaged in animated discussions, their laughter blending with the rich aroma of coffee, creating a haven for connection and camaraderie."
]


// Elements from the HTML document
const pg = document.getElementById('pg');
const userinput = document.querySelector('.textinput'); 
const resetbtn = document.querySelector('.containerin button'); 
const totaltime = document.querySelector('.time .txt2');
const totalwpm = document.querySelector('.wpm .txt2');
const totalmistake = document.querySelector('.mistake .txt2');
const totalcpm = document.querySelector('.cpm .txt2');


// Timer and typing variables
let timer;
let maxTime = 120; 
let timeRemaining = maxTime;
let charIndex = 0;
let mistakes = 0;
let isTyping = 0;


// Function to set a random paragraph for typing
const setParagraph = () => {
    // Select a random paragraph from the array
    const randIndex = Math.floor(Math.random()*paragraphs.length);
    
    // Clear the existing content of the paragraph element
    pg.innerText = "";
    
    // Split the paragraph into individual characters and create spans
    paragraphs[randIndex].split("").forEach(char => {
        // console.log(char);
        pg.innerHTML += `<span>${char}</span>`
    })

    // Highlight the first character and set up event listeners
    pg.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener("keydown", () => userinput.focus())
    pg.addEventListener("click", () => userinput.focus())
    

    // Initialize and display initial statistics
    totaltime.innerText = timeRemaining;
    totalwpm.innerText = 0;
    totalmistake.innerText = 0;
    totalcpm.innerText = 0;

}

// Function to start the typing test
const startTyping = () => {
    // Get all characters from the paragraph
    let characters = pg.querySelectorAll('span');
    // console.log(characters);

    // Get the currently typed character
    let typedChar = userinput.value.split("")[charIndex];

    // Check if there are characters left to type and time is remaining
    if(charIndex < characters.length - 1 && timeRemaining > 0){
       
      // Start the timer if not already started
      if(!isTyping){
        // 0 or false
        timer = setInterval(startTimer, 1000);
        isTyping = true;
      }
      

      // Check if the typed character is null
      if(typedChar == null){
        if(charIndex > 0){
            // Move back if there is a previous character
           charIndex--;

           // Adjust mistakes count if the previous character was a null
           if(characters[charIndex].classList.contains("incorrect")){
               mistakes--;
           }

           // Remove styling for incorrect and correct
           characters[charIndex].classList.remove("incorrect", "correct");
        }
      }
      else{
       // Check if the typed character is correct 
       if(characters[charIndex].innerText == typedChar){
        characters[charIndex].classList.add("correct");

       }
       else {
        // Handle incorrect character
        characters[charIndex].classList.add("incorrect");
        mistakes++;
       }

       // Move to the next character
       charIndex++; 
      }
      

      // Update styles for active character
      characters.forEach(char => {
        char.classList.remove("active");
      })
      characters[charIndex].classList.add("active");
      
      // Calculate and display WPM, Mistakes, and CPM
      let wpm = Math.round(((charIndex-mistakes)/5) / (maxTime-timeRemaining)*60)
       wpm = wpm < 0 || !wpm || wpm == Infinity ? 0 : wpm;
       totalwpm.innerText = wpm;
       totalmistake.innerText = mistakes;
       totalcpm.innerText = charIndex - mistakes;

    }

    else{
        // Stop the timer if all characters are typed or time is up
        clearInterval(timer);
        isTyping = false;
    }
    
}

// Function to update the timer while typing
const startTimer = () => {
    if(timeRemaining > 0){
        // Update time remaining and display it
        timeRemaining--;
        totaltime.innerText = timeRemaining;

        // Calculate and display WPM
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeRemaining) * 60)
        totalwpm.innerHTML = wpm;
    }
    else {
        // Stop the timer if time is up
        clearInterval(timer);
        isTyping = false;
    }
}


// Function to reset the game
const resetGame = () => {
    // Set a new random paragraph
    setParagraph();


    // Clear the timer and reset variables
    clearInterval(timer);
    timeRemaining = maxTime;
    charIndex = 0;
    mistakes = 0;
    isTyping = 0;

    // Clear user input and reset statistics
    userinput.value = "";
    totaltime.innerText = timeRemaining;
    totalwpm.innerText = 0;
    totalmistake.innerText = 0;
    totalcpm.innerText = 0;
}

// Initial setup for the typing test
setParagraph();

// Event listeners for the reset button and user input
resetbtn.addEventListener('click', resetGame);
userinput.addEventListener('input', startTyping);


// Switch function

const switchTheme = () => {
    // Get the root element and data-theme value

    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme'), newTheme;

    newTheme = (dataTheme === 'light') ? 'dark' : 'light';

    // Set the new HTML attribute

    rootElem.setAttribute('data-theme', newTheme);

}

// Add event listner for the theme switcher

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)