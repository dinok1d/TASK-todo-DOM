// const { values } = require("core-js/core/array");

// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
// let obj = {};
// // obj.id = 0;
// obj.done = false;

let categories = [];

// // REMOVE ME: SAMPLE FILLING
// tasks = [
//   { id: 0, title: "Game of thrones", category: "Movies", done: false },
//   { id: 1, title: "Toy Story 4", category: "Movies", done: false },
// ];

// console.log(tasks)
// categories = ["Movies", "Groceries"];
// SAMPLE

renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // // You are given the task id

  // tasks.forEach((id) => {
  //   id = true;
  // });

  console.log(checked);
  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  const obj = {
    id: tasks.length,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  };
  tasks.push(obj);
  renderTasks(tasks, "tasks-list");
  // alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
}

function addCategory() {
  const newCategory = getNewCategoryText();
  categories.push(newCategory);
  renderCategories(categories, CATEGORY_SELECTOR);
  // alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // categories.push(selectedCategory);
  renderCategories(categories, CATEGORY_FILTER);
  // continue the code here
  // REMOVE ME: sample alert
  alert(`Category: ${selectedCategory} | done: ${done}`);
}

// function idIncrement() {
//   if taskTitle()
//   return id + 1;
// }
