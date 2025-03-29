document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelectorAll('button')[0];
    const removeButton = document.querySelectorAll('button')[1];

    addButton.addEventListener('click', function() {

        const newTaskDiv = document.createElement('div')
        newTaskDiv.style.display = 'flex';
        newTaskDiv.style.display = 'column'
        
        const newTaskTextArea = document.createElement('textarea');
        newTaskTextArea.id = 'sourcetext';
        newTaskTextArea.rows = '1';
        newTaskTextArea.placeholder = 'Write Your Task Here'
        newTaskDiv.appendChild(newTaskTextArea)

        const buttonsDiv = document.querySelector('div:last-of-type');

        const body = document.querySelector('body');
        body.insertBefore(newTaskDiv, buttonsDiv);
    });

    removeButton.addEventListener('click', function() {

        const allDivs = document.querySelectorAll('div');
        const taskDivs = Array.from(allDivs).filter(div =>
            div.querySelector('textarea')
        );

        if (taskDivs.length > 1) {
            const lastTaskDiv = taskDivs[taskDivs.length - 1];
            lastTaskDiv.remove();
        }
    })
});