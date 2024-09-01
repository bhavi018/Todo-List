function addTask(type) {
    const inputId = `${type}-input`; //retrieve id's
    const ulId = `${type}-tasks`;

    const taskInput = document.getElementById(inputId);
    const taskList = document.getElementById(ulId);

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-white p-2 rounded shadow';
        
        // Create checkbox and task text
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'mr-2';
        checkbox.onchange = () => toggleTaskCompletion(li, checkbox); //statechanges

        // Create task text and delete button
        const taskText = document.createElement('span');  //display task text
        taskText.textContent = taskInput.value.trim();

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'bg-red-500 text-white px-2 py-1 rounded';
        deleteButton.onclick = () => deleteTask(deleteButton);

        // Append checkbox, task text, and delete button to the list item
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}

function toggleTaskCompletion(taskItem, checkbox) {
    if (checkbox.checked) {
        taskItem.classList.add('line-through', 'text-gray-400', 'celebrate');
        setTimeout(() => taskItem.classList.remove('celebrate'), 500); // Remove the animation class after it runs
    } else {
        taskItem.classList.remove('line-through', 'text-gray-400');
    }
}
