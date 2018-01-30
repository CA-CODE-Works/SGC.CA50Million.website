// JavaScript Document
window.addEventListener("load", highlIghtinit, false);
window.addEventListener("load", chaptersInit, false);
window.addEventListener("load", elementsInit, false);

function highlIghtinit() {
  var hoverimages = document.getElementsByClassName('hover-img');
  for (i = 0; i < hoverimages.length; i++) {
    hoverimages[i].addEventListener("mouseover", hoverimageHighlight);
    hoverimages[i].addEventListener("mouseout", hoverimageUnlight);
  }
function hoverimageHighlight() {
  myTemp = this.src.substring(0, this.src.lastIndexOf(".") - 1);
  myTemp += "2.png";
  this.src = myTemp;
}

function hoverimageUnlight() {
  myTemp = this.src.substring(0, this.src.lastIndexOf(".") - 1);
  myTemp += "1.png";
  this.src = myTemp;

  }
  menuContainers[menuInt].firstChild.style.opacity = 1;
  menuPointers[menuInt].style.opacity = 1;
}
