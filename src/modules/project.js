import { displayTodo, setupTodoElements } from "./display";

const projectFactory = (title) => {
  return { title, storage: [] };
};

const loopStorageDisplay = (storage, element) => {
  for (let index = 0; index < storage.length; index++) {
    const taskInfo = setupTodoElements(storage[index]);
    displayTodo(taskInfo);
  }
};

export { projectFactory, loopStorageDisplay };
