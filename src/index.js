const todoItemFactory = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

const task = todoItemFactory(
  "Complete ToDo list app",
  "Build a simple todo list application in JS",
  Date(),
  1
);

console.log(task.title);
console.log(task.description);
console.log(task.dueDate);
