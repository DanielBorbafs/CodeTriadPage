// script.js

const subNavs = document.querySelectorAll(`.subnav`);
const buttons = document.querySelectorAll(`.sidebar button`);

const resetSidebar = () => {
  subNavs.forEach((nav) => {
    nav.style.height = 0;
  });

  buttons.forEach((b) => {
    b.classList.remove("active");
  });
};

const handleHeaderClicked = (subNav) => {
  resetSidebar();

  const subNavOuter = document.querySelector(`#${subNav}`);
  const subNavInner = document.querySelector(`#${subNav} .subnav-inner`);
  const button = subNavOuter.previousElementSibling;

  if (subNavOuter.clientHeight > 0) {
    subNavOuter.style.height = 0;
    button.classList.remove("active");
    return;
  }

  button.classList.toggle("active");
  const newHeight = `${subNavInner.clientHeight}px`;
  subNavOuter.style.height = newHeight;

};
