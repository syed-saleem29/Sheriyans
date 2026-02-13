function openFeatures() {
  let allElem = document.querySelectorAll(".elem");
  let mainPages = document.querySelectorAll(".fullElem");
  let mainPagesBackBtn = document.querySelectorAll(".fullElem .back");

  // console.log(allElem)

  allElem.forEach(function (elem) {
    elem.addEventListener("click", function () {
      mainPages[elem.id].style.display = "block";
      setTimeout(() => {
        mainPages[elem.id].style.transform = "translateX(0)";
      }, 10);
    });
  });

  mainPagesBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      mainPages[back.id].style.transform = "translateX(100%)";
      setTimeout(() => {
        mainPages[back.id].style.display = "none";
      }, 300);
    });
  });
}

openFeatures();
