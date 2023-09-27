// getBoundingClientRect()

let header = window.document.querySelector('.header');
let headerHeight = header.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  console.log(window.scrollY);

  if (window.scrollY > headerHeight) {
    header.classList.add('header--black');
  } else {
    header.classList.remove('header--black');
  }
});
