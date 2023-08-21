"use strict";

// nav
const nav = document.querySelector(".navbar");
// btns
const searchbtn = document.querySelector(".input-group-text");
const morebtn = document.querySelector(".morebtn");
const emailbtn = document.querySelector(".email-btn");
const phonebtn = document.querySelector(".phone-btn");
// containers
const morebtnContainer = document.querySelector(".projects-moreBtn-container");
// inputs
const searchInput = document.querySelector(".form-control");
// cards
const [cardProjects, cardVisualization, cardRealization] = [
  ...document.querySelectorAll(".dropdown-item"),
];
const cardProj = document.querySelector("#projects");
const cardVis = document.querySelector("#visualization");
const cardReal = document.querySelector("#realization");

// Copy function
const copyContent = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

// Navigation
window.onscroll = () => {
  if (window.scrollY > 0) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
};

// Search button
searchbtn.addEventListener("click", function () {
  searchInput.classList.remove("hidden");
});

searchInput.addEventListener("focusout", () =>
  searchInput.classList.add("hidden")
);

// More button
morebtn.addEventListener("click", function () {
  grid2.style.display = "block";
  morebtnContainer.style.display = "none";

  imagesLoaded(grid2, function () {
    msnry2 = new Masonry(grid2, {
      itemSelector: ".grid-item--2",
      columnWidth: ".grid-sizer--2",
      gutter: ".gutter-sizer--2",
      horizontalOrder: true,
      percentPosition: true,
    });
  });
});

// Email buttom
emailbtn.addEventListener("click", function () {
  let text = emailbtn.textContent;
  copyContent(text);
});

phonebtn.addEventListener("click", function () {
  let text = phonebtn.textContent;
  copyContent(text);
});

// Popovers
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// Card shadow
const addBoxShadow = (el) =>
  (el.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.5)");
const removedBoxShadow = (el) => (el.style.boxShadow = "none");

cardProjects.addEventListener("click", () => {
  addBoxShadow(cardProj);

  setTimeout(() => {
    removedBoxShadow(cardProj);
  }, 1000);
});

cardVisualization.addEventListener("click", () => {
  addBoxShadow(cardVis);

  setTimeout(() => {
    removedBoxShadow(cardVis);
  }, 1000);
});

cardRealization.addEventListener("click", () => {
  addBoxShadow(cardReal);

  setTimeout(() => {
    removedBoxShadow(cardReal);
  }, 1000);
});

// Masonry
var grid = document.querySelector(".grid");
var msnry;
var grid2 = document.querySelector(".grid--2");
var msnry2;

imagesLoaded(grid, function () {
  msnry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    horizontalOrder: true,
    percentPosition: true,
  });
});

// Changing nav hrefs
if (screen.width <= 992) {
  cardProjects.href = "#projects";
  cardVisualization.href = "#visualization";
  cardRealization.href = "#realization";
} else {
  cardProjects.href = "#offers";
  cardVisualization.href = "#offers";
  cardRealization.href = "#offers";
}
