const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeName = document.querySelector("#dark-mode-name");
const wrapper = document.querySelector(".wrapper");
const aTags = document.querySelectorAll(".wrap");
console.log(aTags);

darkModeToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  wrapper.classList.toggle("active");
  aTags.forEach(function (singleAtag) {
    singleAtag.classList.toggle("active");
    if (darkModeToggle.classList.contains("active")) {
      darkModeName.innerHTML = "Light Mode";
    } else {
      darkModeName.innerHTML = "Dark Mode";
    }
  });
});
