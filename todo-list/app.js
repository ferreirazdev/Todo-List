var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');

var createNewTaskElement = function(taskString) {
    var listItem = document.createElement('li');
    var checkBox = document.createElement('input');
    var label = document.createElement('label');

    var editInput = document.createElement('input');
    var editButton = document.createElement('button');
    var deleteButton = document.createElement('button');

    label.innerText = taskString;

    checkBox.type="checkbox";
    editInput.type="text";

    editButton.innerText="Edit";
    editButton.className="edit";
    deleteButton.innerText="Delete";
    deleteButton.className="delete";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}

var addTask = function() {
    console.log("Add Task...");

    var listItem =  createNewTaskElement(taskInput.value);

    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value="";
}

var editTask = function() {
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");

    var listItem = this.parentNode;

    var editInput = listItem.querySelector('input[type=text]');
    var label = listItem.querySelector("label");
    var containsClass = listItem.classList.contains("editMode");

    if(containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }

    listItem.classList.toggle("editMode")
}

