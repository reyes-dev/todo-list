import { projectFactory } from "./project";
let allProjects = localStorage["projects"];

const setupStorage = () => {
  // Return previously built up projects array if available
  if (allProjects) {
    let projects = JSON.parse(allProjects);
    return projects;
  }
  // Return newly crafted projects array with default inbox project
  else {
    const projects = [];
    const inbox = projectFactory("Inbox");
    projects.push(inbox);
    localStorage.setItem("projects", JSON.stringify(projects));
    return projects;
  }
};

const updateStorage = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

export { setupStorage, updateStorage };
