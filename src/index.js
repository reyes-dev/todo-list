import { todoItemFactory } from "./modules/todo";
import { projectFactory, loopStorageDisplay } from "./modules/project";
import { element, navbar, setupPage } from "./modules/display";
const todoForm = document.querySelector("#todoForm");
const projectForm = document.querySelector("#projectForm");

setupPage();
const projects = [];
const inbox = projectFactory("Inbox");
projects.push(inbox);
let currentProject = projects[0];
// Clear out the todo item container and run function to repopulate it with todo items
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
// Event listeners to add new todo items and projects
todoForm.onsubmit = (event) => {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let dueDate = document.getElementById("dueDate").value;
  let newTodoItem = todoItemFactory(title, description, dueDate);
  currentProject.storage.push(newTodoItem);
  todoForm.reset();
  clearAndDisplay(currentProject);
};
projectForm.onsubmit = (event) => {
  event.preventDefault();
  const projectName = document.getElementById("projectName").value;
  const newProject = projectFactory(projectName);
  projects.push(newProject);
  projectForm.reset();
  navbar.innerHTML = "";
  generateProjectLinks(projects);
};
// Set up the initial page with the default project (inbox)
generateProjectLinks(projects);
loopStorageDisplay(inbox.storage, element);
