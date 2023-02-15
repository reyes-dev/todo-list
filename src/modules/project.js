import { displayTodo, setupTodoElements } from "./display";
export let completedTodoItems = [];

const projectFactory = (title) => {
  return { title, storage: [] };
};

const loopStorageDisplay = (storage) => {
  for (let index = 0; index < storage.length; index++) {
    const taskInfo = setupTodoElements(storage[index], index);
    displayTodo(taskInfo);
  }
};

export { projectFactory, loopStorageDisplay };
