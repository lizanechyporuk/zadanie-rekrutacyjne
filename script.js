"use strict";

// nav
const nav = document.querySelector(".navbar");
// btns
const searchbtn = document.querySelector(".input-group-text");
const morebtn = document.querySelector(".morebtn");
// containers
const morebtnContainer = document.querySelector(".projects-moreBtn-container");
// inputs
const searchInput = document.querySelector(".form-control");
// cards
const [cardProjects, cardVisualization, cardRealization] = [
  ...document.querySelectorAll(".dropdown-item"),
];

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
window.addEventListener("resize", function () {
  if (screen.width <= 992) {
    cardProjects.href = "#projects";
    cardVisualization.href = "#visualization";
    cardRealization.href = "#realization";
  } else {
    cardProjects.href = "#offers";
    cardVisualization.href = "#offers";
    cardRealization.href = "#offers";
  }
});
