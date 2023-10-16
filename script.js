function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("task-list");

    var li = document.createElement("li");
    li.innerHTML = taskText + '<button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);

    taskInput.value = "";
}

function deleteTask(task) {
    task.parentNode.remove();
}
