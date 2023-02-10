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

export { todoItemFactory };
