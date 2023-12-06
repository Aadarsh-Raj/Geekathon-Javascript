document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addDivButton');
    const container = document.getElementById('value');
    let newDiv;

    // Load data from localStorage on page load
    loadFromLocalStorage();

    addButton.addEventListener('click', function () {
        newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'board-input');

        newDiv.innerHTML = `
            <input type="text" id="board-name" placeholder="Enter Board name">
            <button id="add-board">Add Board</button>
            <a href="#" class="closex">&times;</a>
        `;
        container.appendChild(newDiv);

        const closeButton = newDiv.querySelector('.closex');
        closeButton.addEventListener('click', function () {
            container.removeChild(newDiv);
        });

        const addBoardButton = newDiv.querySelector('#add-board');
        addBoardButton.addEventListener('click', function () {
            const boardName = newDiv.querySelector('#board-name').value;
            if (boardName == '') {
                alert("Enter Board Name");
            } else {
                const board = document.getElementById('board-container');
                console.log("Clicked Add Board");
                let appendDiv = document.createElement('div');
                appendDiv.innerHTML = `
                    <div class="board" >
                        <div class="top">
                            <p>${boardName}</p>   
                            <a href="#" class="area"><img src="3dot.svg" alt="dot"></a>
                        </div>
                        <div class="add-card-name"></div>
                        <div class="container" id="middle-div"></div>
                        <div class="add-card">
                            <button class="button1" id="add-card-title">+ Add Card</button>
                        </div>
                    </div>
                `;
                board.insertBefore(appendDiv, board.lastElementChild);
                newDiv.style.display = 'none';

                // Save data to localStorage
                saveToLocalStorage();

                const containerMiddle = appendDiv.querySelector('.add-card-name');
                let middleDiv;

                const addCard = appendDiv.querySelector("#add-card-title");
                addCard.addEventListener('click', function (event) {
                    event.preventDefault();
                    console.log("clicked add card title");

                    addCard.disabled = true;
                    middleDiv = document.createElement('div');
                    middleDiv.setAttribute('class', 'card-input');
                    middleDiv.innerHTML = `
                        <input type="text" class="card-tie" placeholder="Enter Card Title">
                        <button class="add-multiple-card">Add </button>
                        <a href="#" class="closex1">&times;</a>
                    `;

                    containerMiddle.appendChild(middleDiv);

                    const closexButton = middleDiv.querySelector('.closex1');
                    closexButton.addEventListener('click', function () {
                        if (containerMiddle.contains(middleDiv)) {
                            containerMiddle.removeChild(middleDiv);
                            addCard.disabled = false;
                        }
                    });

                    let thirdDiv;
                    const multipleCard = middleDiv.querySelector('.add-multiple-card');
                    const centerContainer = appendDiv.querySelector('#middle-div');
                    console.log("Before creating thirdDiv:", thirdDiv);

                    multipleCard.addEventListener('click', function (e) {
                        e.preventDefault();
                        const titleName = middleDiv.querySelector('.card-tie').value;
                        console.log(titleName);

                        if (titleName == '') {
                            alert("Enter card Title");
                        } else {
                            thirdDiv = document.createElement('div');
                            thirdDiv.classList.add('card-div');
                            thirdDiv.classList.add('draggable');
                            thirdDiv.draggable=true;
                            
                            let boardCounter = 0;
                            thirdDiv.innerHTML = `
                            <div class="top-span">
                            <label for="" class="lab-p"></label>
                            <a href="#" class="del">&#x22EF</a>
                            </div>
                                <p class="p-title">${titleName}</p>
                                <a href="#" class="area tooltip" ><img src="hamburger.svg" alt="hamburger">
                                <span class="tooltiptext"></span></a>
                                <div class="date-task">
                                    <p class="date-value"><img src="clock.svg" alt="clock"></p>
                                    <p><img src="tick.svg" alt="tick"> 0/1</p>
                                </div>`;
                            const areaImg = thirdDiv.querySelector('.area');

                            const draggables = thirdDiv.querySelectorAll('.draggable:not(.add-card)')
                              const containers = appendDiv.querySelector('.middle-div')


                              const threeDot = thirdDiv.querySelector('.del');
                                threeDot.addEventListener('click', function (event) {
                                    event.preventDefault();

                                    const container = thirdDiv.closest('#middle-div');

                                    console.log("Before removal - container:", container);
                                    console.log("Before removal - thirdDiv:", thirdDiv);

                                    if (container) {
                                        container.removeChild(thirdDiv);
                                    }

                                    console.log("After removal - container:", container);
                                    console.log("After removal - thirdDiv:", thirdDiv);

                                    saveToLocalStorage();
                                });

                                
                              draggables.forEach(draggable => {
                                  draggable.addEventListener('dragstart', () => {
                                    draggable.classList.add('dragging')
                                  })
                                
                                  draggable.addEventListener('dragend', () => {
                                    draggable.classList.remove('dragging')
                                  })
                                })
                                // containers.forEach(container => {
                                //   container.addEventListener('drop', e => {
                                //     e.preventDefault();
                                //     const draggable = document.querySelector('.dragging');
                                //     container.appendChild(draggable);
                                //   });
                                
                                //   container.addEventListener('dragover', e => {
                                //     e.preventDefault();
                                //     const afterElement = getDragAfterElement(container, e.clientY);
                                //     const draggable = document.querySelector('.dragging');
                                //     if (afterElement == null) {
                                //       container.appendChild(draggable);
                                //     } else {
                                //       container.insertBefore(draggable, afterElement);
                                //     }
                                //   });
                                // });
                            const popWindow = document.getElementById("pop-it");
                            const close = document.getElementById("close-it");
                            const over = document.getElementById("overlay");
                            const descriptionInput = document.getElementById("description-input");
                            const titleInput = document.getElementById("title-input");
                            const labelInput = document.getElementById("label-input");
                            const tasksInput = document.getElementById("tasks-input");
                            areaImg.addEventListener('click', function (event) {
                                event.preventDefault();
                                over.classList.add("active");
                                popWindow.style.display = "block";

                                const cardTitle = thirdDiv.querySelector('p');
                            
            
                            });
                            const labAns = thirdDiv.querySelector('.lab-p');
                            const labelInputP = document.getElementById('heading');

                            labelInputP.addEventListener('input', function () {
                                labAns.innerText = labelInputP.value;
                                saveToLocalStorage();
                            });

                            labelInput.addEventListener('input', function () {
                                labAns.style.background = labelInput.value;
                                saveToLocalStorage();
                            });
                            
                           
                            const cardTitle = thirdDiv.querySelector('p');
                  
                            titleInput.addEventListener('input', function () {
                              saveToLocalStorage();
                            
                            cardTitle.innerText = titleInput.value;
                      });
                      const describe = thirdDiv.querySelector('.tooltiptext');
                      const descriptionInputcard = document.getElementById("description-input");
                      descriptionInputcard.addEventListener('input', function(){
                        describe.innerText = descriptionInput.value;
                        saveToLocalStorage();
                      })
          
                            const dateInput = document.getElementById('date-input');
                            const dateMonth = thirdDiv.querySelector('.date-value');

                            dateInput.addEventListener('input', function () {
                                // Assuming you want to display only the date and month
                                const selectedDate = new Date(dateInput.value);
                                const options = { day: 'numeric', month: 'long' };
                                const formattedDate = selectedDate.toLocaleDateString('en-US', options);

                                dateMonth.innerText = formattedDate;
                                console.log(formattedDate);
                                saveToLocalStorage();
                            });
                            const addTaskButton = document.getElementById("add-task-button");
                            const taskCheckbox = document.getElementById("task-checkbox");

                            addTaskButton.addEventListener('click', function () {
                                const titlePopupValue = titleInput.value;
                                
                    

                                const taskElement = document.createElement('div');
                                taskElement.innerHTML = `
                                    <div class="cardinfo-box-progress-bar">
                                        <div class="cardinfo-box-progress"></div>
                                    </div>
                                    <input type="checkbox" ${taskCheckbox.checked ? 'checked' : ''}> ${titlePopupValue} <a href="#"><i class="fa-solid fa-trash aside"></i></a>
                                `;

                                const tasksContainer = document.getElementById("add-task-popup");
                                tasksContainer.appendChild(taskElement);

                                const trashIcon = taskElement.querySelector('.fa-trash');
                                trashIcon.addEventListener('click', function () {
                                    taskElement.remove();
                                });
                            });



                            const threeDotButton = appendDiv.querySelector('.area');
                            threeDotButton.addEventListener('click', function (event) {
                              event.preventDefault();
                          
                              
                              const boardContainer = document.getElementById('board-container');
                              boardContainer.removeChild(appendDiv);
                              
                          
                              saveToLocalStorage();
                          });
                          

                            close.addEventListener('click', function (event) {
                                event.preventDefault();
                                over.classList.remove("active");
                                popWindow.style.display = 'none';
                            });

                            centerContainer.appendChild(thirdDiv);
                            addCard.disabled = false;
                            middleDiv.style.display = 'none';

                            // Save data to localStorage
                            saveToLocalStorage();
                        }
                    });
                });
            }
        });
    });

    // Function to save data to localStorage
    function saveToLocalStorage() {
        const boardContainer = document.getElementById('board-container');
        const boards = Array.from(boardContainer.querySelectorAll('.board')).map(board => board.outerHTML);
        localStorage.setItem('boards', JSON.stringify(boards));
    }

    // Function to load data from localStorage
    function loadFromLocalStorage() {
        const boardContainer = document.getElementById('board-container');
        const savedBoards = JSON.parse(localStorage.getItem('boards')) || [];
        savedBoards.forEach(board => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = board;
            boardContainer.appendChild(tempDiv.firstElementChild);
        });
    }
});


