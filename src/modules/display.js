const element = document.querySelector("div#content");

const setupTodoElements = (todo) => {
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const dueDate = document.createElement("p");

  title.innerHTML = todo.title;
  description.innerHTML = todo.description;
  dueDate.innerHTML = todo.dueDate;
  return { title, description, dueDate };
};

const displayTodo = (taskInfo) => {
  element.appendChild(taskInfo.title);
  element.appendChild(taskInfo.description);
  element.appendChild(taskInfo.dueDate);
};

export { element, setupTodoElements, displayTodo };
