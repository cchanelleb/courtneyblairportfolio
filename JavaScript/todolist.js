// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const tasksList = document.getElementById('tasks');

    // Add task event listener
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Task cannot be empty!');
            return;
        }

        // Create a new task item
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskContent.classList.add('task-content');

        // Create a 'Complete' button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', () => {
            taskContent.classList.toggle('completed');
        });

        // Create a 'Delete' button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            tasksList.removeChild(taskItem);
        });

        // Append the elements to the task item
        taskItem.appendChild(taskContent);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        // Add the task item to the list
        tasksList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    });
});
