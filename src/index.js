import { todoItemFactory } from "./modules/todo";
import { projectFactory, loopStorageDisplay } from "./modules/project";
import { element, navbar, setupPage } from "./modules/display";
const form = document.querySelector("form");

setupPage();
const projects = [];
const inbox = projectFactory("Inbox");
const todoProject = projectFactory("Todo Project");
projects.push(inbox);
projects.push(todoProject);
let currentProject = projects[0];

const task1 = todoItemFactory(
  "Complete ToDo list app",
  "Build a simple todo list application in JS",
  Date()
);

const task2 = todoItemFactory(
  "Write an array loop function",
  "Build a function that loops over the storage array of the passed projectFactory object",
  Date()
);

const task3 = todoItemFactory(
  "Write code to change projects",
  "Give links in a nav bar to alternate between different project task lists",
  Date()
);
const clearAndDisplay = (project) => {
  element.innerHTML = "";
  loopStorageDisplay(project.storage, element);
};
// For each link-to-project, add an eventlistener that clears the div container and repopulates it with project-specific tasks, and sets the currentProject variable
const addProjectEventListeners = (link, project) => {
  link.addEventListener("click", () => {
    clearAndDisplay(project);
    currentProject = project;
  });
};
// For each project, create a link and append it to the navbar, and add an event listener to that link
const generateProjectLinks = (projectList) => {
  for (let index = 0; index < projectList.length; index++) {
    const navLink = document.createElement("a");
    navLink.innerHTML = projectList[index].title;
    navLink.href = "#";
    navbar.appendChild(navLink);
    addProjectEventListeners(navLink, projectList[index]);
  }
};

inbox.storage.push(task1, task2);
todoProject.storage.push(task3);
generateProjectLinks(projects);
loopStorageDisplay(inbox.storage, element);

form.onsubmit = (event) => {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let dueDate = document.getElementById("dueDate").value;
  let newTodoItem = todoItemFactory(title, description, dueDate);
  currentProject.storage.push(newTodoItem);
  form.reset();
  clearAndDisplay(currentProject);
};
