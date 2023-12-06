# Geekathon-javascript

Hosted Link : https://rajkumarrj.github.io/Geekathon-javascript/

![image](https://github.com/RajkumarRj/Geekathon-javascript/assets/142428565/ddc157e0-18df-4197-846c-7f96a8e46237)



This HTML code represents a simple Trello-like board. Here's a brief description:

1. **Head Section:**
    - The document type is HTML5 (`<!DOCTYPE html>`).
    - Character set and viewport settings are defined.
    - The title of the page is set to "Trello."
    - A link to an external stylesheet (`style.css`) is included.
    - The Font Awesome kit is included for icons.

2. **Body Section:**
    - The page contains a heading `<h2>` with the text "Trello Board."
    - There's a `<div>` with the id "board-container," which includes two child elements:
        - `<div>` with the id "value" for dynamically added boards.
        - `<div>` with the id "container" containing a button with the class "button2" and the id "addDivButton" for adding new boards.

    - There's a modal (`pop-it`) for adding details to a board:
        - Sections for Title, Description, Date, Label, and Tasks.
        - Various input elements like text, textarea, date, and color.
        - A section for adding tasks with a checkbox, label, and button.

    - An overlay (`overlay`) is used for a modal-like effect.

    - A script tag includes an external JavaScript file (`script.js`) with the `defer` attribute, meaning it will be executed after the HTML parsing is complete.

3. **Script Section:**
    - The JavaScript code, specified in `script.js`, likely includes functionality for dynamically adding boards, handling pop-up modal interactions, and managing tasks within a board.


This CSS code provides styling for a Trello-like board. Here's a breakdown of the styles:

1. **Universal Styles:**
   - All elements (`*`) have padding and margin set to 0, box-sizing set to border-box, and a default font family.
   - The body has a background image (`bg.jpg`) with fixed size cover and is styled with additional fonts and background.

2. **Board Container:**
   - The `#board-container` is a flex container with a row direction, some gap, and specific width and margin properties.

3. **Heading Styles:**
   - The `h2` element (Trello Board) has a white color, a font size of 35px, and some margin.

4. **Board Styles:**
   - `.board` class represents individual boards with a transparent background, a box shadow, and specific width and height properties.

5. **Top Section Styles:**
   - `.top` class represents the top section of a board with flex display, space-between alignment, and a margin.

6. **Link Styles:**
   - Anchor (`a`) elements have black color and no text decoration.

7. **Middle Division Styles:**
   - `#middle-div` represents the central part of the board with a white background, border-radius, padding, and a box shadow.

8. **Tooltip Styles:**
   - Tooltips are defined for elements with the `.tooltip` class, including a hidden tooltip text.

9. **Card Styles:**
   - `.card-div` class represents individual cards with specific styling, including font weight, padding, border-radius, overflow settings, and box shadow.

10. **Scrollbar Styles:**
    - Custom styling for the scrollbar is provided using `::-webkit-scrollbar`.

11. **Label Styles:**
    - Styling for labels includes font size, background color, width, text-align, border-radius, and padding.

12. **Date and Task Styles:**
    - Styling for the date and task section, including flex display and spacing.

13. **Image Styles:**
    - Styling for images within cards and the top section.

14. **Button Styles:**
    - Styles for various buttons, including add card button, add board button, and task-related buttons.

15. **Popup Styles:**
    - Styles for the pop-up modal, including background color, width, height, position, and transitions.

16. **Overlay Styles:**
    - Styling for the overlay used to create a modal effect.

17. **Input and Placeholder Styles:**
    - Styles for input fields and placeholders, including height, width, border, margin, and font size.

18. **Focus Styles:**
    - Styles for focused buttons to change the border color.

19. **Dragging Styles:**
    - Opacity is reduced for elements with the class `.dragging`.

20. **Value Styles:**
    - Additional styles for the `#value` element.

21. **Additional Styles:**
    - Specific styles for `#board-input` and `.card-input`, including flex display, width, margin, background color, padding, border radius, and position.





This JavaScript code adds functionality to your Trello-like board. Here's a breakdown of the code:

1. **Event Listener on DOM Content Load:**
   - The code begins with an event listener for the DOMContentLoaded event, ensuring that the JavaScript code is executed after the HTML content is fully loaded.

2. **Add Board Button Click Event:**
   - The script selects the "Add Board" button and adds a click event listener to it.
   - When the button is clicked, it creates a new div (`#board-input`) with input fields for the board name, an "Add Board" button, and a close button (X).

3. **Close Board Input Section:**
   - The close button (`&times;`) removes the board input section when clicked.

4. **Add Board Click Event:**
   - When the "Add Board" button in the board input section is clicked, it creates a new board with a specified structure and inserts it before the last child of the board container (`#board-container`).
   - The new board includes sections for the board name, adding cards, and a placeholder for card titles.

5. **Add Card Click Event:**
   - Inside each board, there's an "Add Card" button. Clicking this button creates a card input section with fields for entering a card title.
   - The script includes event listeners for the close button in the card input section and the "Add" button to add multiple cards.
   - Each card has a title, three-dot menu, and sections for date and tasks.

6. **Drag and Drop Functionality:**
   - Drag and drop functionality is implemented for cards within the board. It allows users to rearrange cards by dragging them to different positions.

7. **Popup Window for Card Details:**
   - Clicking on the three-dot menu in a card opens a popup window with input fields for title, description, date, label, and tasks.
   - The popup window also includes a progress bar and a checkbox for completing tasks.

8. **Task Checkbox and Trash Icon:**
   - The script handles adding tasks to a card, including a checkbox to mark tasks as complete and a trash icon to delete tasks.

9. **Remove Board Functionality:**
   - Clicking on the three-dot menu in a board allows users to remove the entire board.

10. **LocalStorage Functions:**
    - Two functions, `saveToLocalStorage` and `loadFromLocalStorage`, are defined to save and load board data to and from the browser's localStorage.
    - The data is stored as an array of HTML strings representing each board.

11. **Initial Load:**
    - On page load, the script calls `loadFromLocalStorage` to load existing board data from localStorage.


