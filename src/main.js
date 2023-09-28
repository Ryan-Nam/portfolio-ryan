const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  //   console.log(window.scrollY);

  if (window.scrollY > headerHeight) {
    header.classList.add('header--black');
  } else {
    header.classList.remove('header--black');
  }
});

// Transparent Home section when scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

// document.addEventListener('scroll', () => {
//     const opacity = 1 - window.scrollY / totalScrollableHeight;
//     document.body.style.opacity = opacity;
// });

const arrowUp = document.querySelector('.arrow-up');
// let maxScroll = 200;
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

//Nav bar Toggle button click
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  // .header__menu.open {
  //     display: flex;
  //   }
  navbarMenu.classList.toggle('open');
});

// When clikc Navbar, automatically close
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});
