import { todoItemFactory } from "./modules/todo";
import { projectFactory } from "./modules/project";
const task = todoItemFactory(
  "Complete ToDo list app",
  "Build a simple todo list application in JS",
  Date(),
  1
);

let inbox = projectFactory("Inbox");
inbox.storage.push(task);
inbox.storage[0].setCompletion();
console.log(inbox.storage[0].getCompletion());
