//DOM Elemnets

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const filterButtons = document.querySelectorAll(".filter-btn");
const taskCount = document.getElementById("taskCount");
const clearCompletedBtn = document.getElementById("clearCompleted");
const emptyState = document.getElementById("emptyState");

//Initial todos-local storge

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

//Initialize the app

function initApp() {
  renderTodos();
  updateStats();
  setupEventListeners();
}

function renderTodos() {
  //Filtered todos
  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === "all") return true;
    if (currentFilter === "pending") return !todo.completed;
    if (currentFilter === "completed") return todo.completed;
    return true;
  });

  //Empty state show/hide
  if (filteredTodos === 0) {
    emptyState.style.display = "block";
    todoList.innerHTML = "";
    todoList.appendChild(emptyState);
  } else {
    emptyState.style.display = "none";

    // Todos
    todoList.innerHTML = "";

    filteredTodos.forEach((todo, index) => {
      const todoElement = createTodoElement(todo, index);
      todoList.appendChild(todoElement);
    });
  }
}
