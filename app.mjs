document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelectorAll('button')[0];
    const removeButton = document.querySelectorAll('button')[1];

    addButton.addEventListener('click', function() {

        const newTaskDiv = document.createElement('div')
        newTaskDiv.style.display = 'flex';
        newTaskDiv.style.flexDirection = 'column'
        
        const newTaskTextArea = document.createElement('textarea');
        newTaskTextArea.id = 'sourceText';
        newTaskTextArea.rows = '1';
        newTaskTextArea.placeholder = 'Write Your Task Here'
        newTaskDiv.appendChild(newTaskTextArea)

        const buttonsDiv = document.querySelector('div:last-of-type');

        const body = document.querySelector('body');
        body.insertBefore(newTaskDiv, buttonsDiv);

        saveTasks();
    });

    removeButton.addEventListener('click', function() {

        const allDivs = document.querySelectorAll('div');
        const taskDivs = Array.from(allDivs).filter(div =>
            div.querySelector('textarea')
        );

        if (taskDivs.length > 1) {
            const lastTaskDiv = taskDivs[taskDivs.length - 1];
            lastTaskDiv.remove();

            saveTasks();
        }
    });

    function saveTasks() {

        const allTextAreas = document.querySelectorAll('textarea');

        const taskValues = [];
        allTextAreas.forEach(textarea => {
            taskValues.push(textarea.value);
        });

        localStorage.setItem('todoTasks', JSON.stringify(taskValues));
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem('todoTasks');
        if (savedTasks) {
            const taskValues = JSON.parse(savedTasks);
            let existingTextAreas = document.querySelectorAll('textarea');
            if (taskValues.length > 0 && existingTextAreas.length > 0) {
                existingTextAreas[0].value = taskValues[0];
            }
            
            for (let i = 1; i < taskValues.length; i++) {
                const newTaskDiv = document.createElement('div');
                newTaskDiv.style.display = 'flex';
                newTaskDiv.style.flexDirection = 'column';

                const newTaskTextArea = document.createElement('textarea');
                newTaskTextArea.id = 'sourceText';
                newTaskTextArea.rows = '1';
                newTaskTextArea.placeholder = 'Write Your Task Here';
                newTaskTextArea.value = taskValues[i];
                newTaskDiv.appendChild(newTaskTextArea);

                const buttonsDiv = document.querySelector('div:last-of-type');
                const body = document.querySelector('body');
                body.insertBefore(newTaskDiv, buttonsDiv);
            }
        }
    }

    document.addEventListener('input', function(event) {
        if (event.target.tagName === 'TEXTAREA') {
            saveTasks();
        }
    });

    loadTasks();
});