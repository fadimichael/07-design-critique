const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeName = document.querySelector("#dark-mode-name");
const wrapper = document.querySelector(".wrapper");
const aTags = document.querySelectorAll(".wrap");

darkModeToggle.innerHTML = "&#xf205";
darkModeName.innerHTML = "Dark Mode";

darkModeToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  wrapper.classList.toggle("active");
  aTags.forEach(function (singleAtag) {
    singleAtag.classList.toggle("active");
    if (darkModeToggle.classList.contains("active")) {
      darkModeName.innerHTML = "Light Mode";
      darkModeToggle.innerHTML = "&#xf204";
    } else {
      darkModeName.innerHTML = "Dark Mode";
      darkModeToggle.innerHTML = "&#xf205";
    }
  });
});

/* -------------------------------------------------------------------------- */
/*                               Hamburger-menu                               */
/* -------------------------------------------------------------------------- */

const hamburger = document.querySelector(".hamburger");
const secHeaderLeft = document.querySelector(".sec-header-left");

hamburger.addEventListener("click", function () {
  this.classList.toggle("show");
  secHeaderLeft.classList.toggle("show");
});
