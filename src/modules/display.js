import { currentProject } from "..";
import { clearAndDisplay } from "..";

const element = document.querySelector("div#content");
const navbar = document.createElement("nav");

const setupPage = () => {
  document.body.appendChild(navbar);
};

const setupTodoElements = (todo, index) => {
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const dueDate = document.createElement("p");
  const completeButton = document.createElement("input");
  completeButton.type = "button";
  completeButton.onclick = function () {
    currentProject.storage.splice(index, 1);
    clearAndDisplay(currentProject);
  };

  title.innerHTML = todo.title;
  description.innerHTML = todo.description;
  dueDate.innerHTML = todo.dueDate;
  return { title, description, dueDate, completeButton };
};

const displayTodo = (taskInfo) => {
  element.appendChild(taskInfo.title);
  element.appendChild(taskInfo.description);
  element.appendChild(taskInfo.dueDate);
  element.appendChild(taskInfo.completeButton);
};

export { element, navbar, setupPage, setupTodoElements, displayTodo };
