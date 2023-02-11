import { todoItemFactory } from "./modules/todo";
import { projectFactory } from "./modules/project";
import { setupTodoElements } from "./modules/display";
const element = document.querySelector("div#content");

const task = todoItemFactory(
  "Complete ToDo list app",
  "Build a simple todo list application in JS",
  Date()
);

const taskInfo = setupTodoElements(task);
element.appendChild(taskInfo.title);
element.appendChild(taskInfo.description);
element.appendChild(taskInfo.dueDate);
