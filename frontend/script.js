// // for cacheing script.js

// const taskForm = document.getElementById("taskForm");
// const taskTitle = document.getElementById("taskTitle");
// const taskList = document.getElementById("taskList");

// function saveTasksToCache(tasks) {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function getTasksFromCache() {
//   const cachedTasks = localStorage.getItem("tasks");
//   return cachedTasks ? JSON.parse(cachedTasks) : [];
// }

// function renderTasks(tasks) {
//   taskList.innerHTML = "";
//   tasks.forEach((task) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <span>${task.title}</span>
//       <button onclick="editTask('${task.id}', '${task.title}')">Edit</button>
//       <button onclick="deleteTask('${task.id}')">Delete</button>
//     `;
//     taskList.appendChild(li);
//   });
// }

// async function getAllTasks() {
//   const tasks = getTasksFromCache();
//   renderTasks(tasks);
// }

// async function addTask(event) {
//   event.preventDefault();
//   const title = taskTitle.value.trim();
//   if (title) {
//     const tasks = getTasksFromCache();
//     const newTask = { id: Date.now().toString(), title }; // Generate a unique ID using the current timestamp
//     tasks.push(newTask);
//     saveTasksToCache(tasks);
//     taskTitle.value = "";
//     renderTasks(tasks);
//   }
// }

// async function editTask(id, currentTitle) {
//   const newTitle = prompt("Enter new task title:", currentTitle);
//   if (newTitle !== null) {
//     const tasks = getTasksFromCache();
//     const taskIndex = tasks.findIndex((task) => task.id === id);
//     if (taskIndex !== -1) {
//       tasks[taskIndex].title = newTitle.trim();
//       saveTasksToCache(tasks);
//       renderTasks(tasks);
//     }
//   }
// }

// async function deleteTask(id) {
//   const tasks = getTasksFromCache();
//   const updatedTasks = tasks.filter((task) => task.id !== id);
//   saveTasksToCache(updatedTasks);
//   renderTasks(updatedTasks);
// }

// taskForm.addEventListener("submit", addTask);
// getAllTasks();
// fd // script.js

const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskList = document.getElementById("taskList");

function saveTasksToCache(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromCache() {
  const cachedTasks = localStorage.getItem("tasks");
  return cachedTasks ? JSON.parse(cachedTasks) : [];
}

function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task.title}</span>
      <button onclick="editTask('${task.id}', '${task.title}')">Edit</button>
      <button onclick="deleteTask('${task.id}')">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

async function getAllTasks() {
  const tasks = getTasksFromCache();
  renderTasks(tasks);
}

async function addTask(event) {
  event.preventDefault();
  const title = taskTitle.value.trim();
  if (title) {
    const tasks = getTasksFromCache();
    const newTask = { id: Date.now().toString(), title }; // Generate a unique ID using the current timestamp
    tasks.push(newTask);
    saveTasksToCache(tasks);
    taskTitle.value = "";
    renderTasks(tasks);
  }
}

async function editTask(id, currentTitle) {
  const newTitle = prompt("Enter new task title:", currentTitle);
  if (newTitle !== null) {
    const tasks = getTasksFromCache();
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      tasks[taskIndex].title = newTitle.trim();
      saveTasksToCache(tasks);
      renderTasks(tasks);
    }
  }
}

async function deleteTask(id) {
  const tasks = getTasksFromCache();
  const updatedTasks = tasks.filter((task) => task.id !== id);
  saveTasksToCache(updatedTasks);
  renderTasks(updatedTasks);
}

taskForm.addEventListener("submit", addTask);
getAllTasks();
