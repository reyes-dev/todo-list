const todoItemFactory = (title, description, dueDate, priority) => {
  let completion = false;
  const getCompletion = () => {
    return completion;
  };
  const setCompletion = () => {
    completion = true;
  };

  return {
    title,
    description,
    dueDate,
    priority,
    getCompletion,
    setCompletion,
  };
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

let inbox = projectFactory("Inbox");
inbox.storage.push(task);
inbox.storage[0].setCompletion();
console.log(inbox.storage[0].getCompletion());
