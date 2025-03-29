document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelectorAll('button')[0];
    addButton.addEventListener('click', function() {

        const newTaskDiv = document.createElement('div')
        newTaskDiv.style.display = 'flex';
        newTaskDiv.style.display = 'column'
        
        const newTaskTextArea = document.createElement('textarea');
        newTaskTextArea.id = 'sourcetext';
        newTaskTextArea.rows = '1';
        newTaskDiv.appendChild(newTaskTextArea)

        const buttonsDiv = document.querySelector('div:last-of-type');

        const body = document.querySelector('body');
        body.insertBefore(newTaskDiv, buttonsDiv);
    });
});