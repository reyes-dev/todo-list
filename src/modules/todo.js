const todoItemFactory = (title, description, dueDate) => {
  let completion = false;
  let priority = 1;
  const getCompletion = () => {
    return completion;
  };
  const setCompletion = () => {
    completion = true;
  };
  const getPriority = () => {
    return priority;
  };
  const incrementPriority = () => {
    if (priority >= 3) {
      return;
    } else {
      priority += 1;
    }
  };
  const decrementPriority = () => {
    if (priority <= 1) {
      return;
    } else {
      priority -= 1;
    }
  };
  return {
    title,
    description,
    dueDate,
    priority,
    getCompletion,
    setCompletion,
    getPriority,
    incrementPriority,
    decrementPriority,
  };
};

export { todoItemFactory };
