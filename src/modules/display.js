const setupTodoElements = (todo) => {
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const dueDate = document.createElement("p");

  title.innerHTML = todo.title;
  description.innerHTML = todo.description;
  dueDate.innerHTML = todo.dueDate;
  return { title, description, dueDate };
};

export { setupTodoElements };
