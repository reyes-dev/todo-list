import { todoItemFactory } from "./modules/todo";
import { projectFactory } from "./modules/project";
const task = todoItemFactory(
  "Complete ToDo list app",
  "Build a simple todo list application in JS",
  Date()
);
