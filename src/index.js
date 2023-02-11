import { todoItemFactory } from "./modules/todo";
import { projectFactory, loopStorageDisplay } from "./modules/project";
import { element } from "./modules/display";
const inbox = projectFactory("Inbox");

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

inbox.storage.push(task1, task2);

loopStorageDisplay(inbox.storage, element);
