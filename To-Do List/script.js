let Alltask = document.querySelector("#taskList");
let Addbutton = document.querySelector("#addTaskBtn");
let input = document.querySelector("#taskInput");

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
console.log(tasks);

function save(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = ''; 
    tasks.forEach((task, index) => {
      createTaskElement(task, index);
    });
  }
function createTaskElement(taskText, index) {
   
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text" style="text-decoration: ${taskText.completed ? 'line-through' : 'none'}">${taskText.text}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="removeTask(${index})">Delete</button>
      <button onclick="complateTask(${index})">complate</button>
    `;
    taskList.appendChild(li);
  }

Addbutton.addEventListener("click",function(){
    let task = {
        text: input.value,
        completed: false,
    }
    tasks.push(task);
    loadTasks();
    save();
});



function editTask(taskIndex){
    let task = tasks[taskIndex];
    let taskText = prompt("Enter new task text");
    task.text = taskText;
    loadTasks();
    save();
}

function removeTask(taskIndex){
    tasks.splice(taskIndex, 1);
    loadTasks();
    save();
}

function complateTask(taskIndex){
    let task = tasks[taskIndex];
    task.completed = !task.completed;
    loadTasks();
    save();
    
}
loadTasks();
