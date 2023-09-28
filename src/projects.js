'use strict';

// Project Filtering Logic
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project'); //array
const projectContainer = document.querySelector('.projects');

// console.log(projects);
categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }
  handleActiveSelection(event.target);
  filterProjects(filter);
});

//Active Menu resetting
function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  // effect
  projectContainer.classList.add('anim-out');
  //Filtering
  projects.forEach((project) => {
    // console.log(project.dataset.type);
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  setTimeout(() => {
    projectContainer.classList.remove('anim-out');
  }, 250);
}
