// 50% 이상 threshold되면, menu변경 - add Class
// 빠지면 remove class

// const options = {
//     threshold: 0.5,
// }

// const callback = (entries) => {
//     entries.forEach((entry)=> {
//         console.log(entry);

//         if(entry.isIntersecting) {
//             entry.target.classList.add()
//         }

//     })

// }

// const observer = new IntersectionObserver(callback, options);
// const sections = document.querySelectorAll('.observer');
// sections.forEach((section)=>{
//     observer.observe(section);
// })

const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonial',
  '#contact',
];
const sections = sectionIds.map((id) => {
  return document.querySelector(id);
});
console.log(sectionIds); //(6) ['#home', '#about', '#skills'
console.log(sections); //(6) [section#home.observer, section#abo

const navItems = sectionIds.map((id) =>
  document.querySelector(`[href='${id}']`)
);
console.log(navItems); //(6) [a.header__menu__item.a

//현재 섹션이 보여지고 있는지 아닌지의 배열의 boolean
const visibleSections = sectionIds.map(() => false);

const options = {
  threshold: 0.5,
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  //flag variable
  let selectLastOne;

  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.99;
    // console.log(entry.target.id);
    // console.log(index);
    // console.log(entry);
    // console.log(entry.target);
    // console.log(entry.isIntersecting);
    // console.log(entry.intersectionRatio);

    // if (entry.isIntersecting) {
    //   entry.target.classList.add();
    // }
  });
  console.log(visibleSections);
  console.log('Last section!', selectLastOne);

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirtstIntersecting(visibleSections);
    console.log(sectionIds[navIndex]);
}

function findFirtstIntersecting (intersections) {
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0

}