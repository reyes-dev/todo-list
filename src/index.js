const todoItemFactory = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

const projectFactory = (title) => {
  return { title, storage: [] };
};

const task = todoItemFactory(
  "Complete ToDo list app",
  "Build a simple todo list application in JS",
  Date(),
  1
);

const inbox = projectFactory("Inbox");
inbox.storage.push(task);
console.log(inbox.storage);
