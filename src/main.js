

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

