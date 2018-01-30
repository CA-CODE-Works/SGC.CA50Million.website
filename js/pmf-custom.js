// JavaScript Document
window.addEventListener("load", highlIghtinit, false);
window.addEventListener("load", chaptersInit, false);
window.addEventListener("load", elementsInit, false);

function highlIghtinit() {
  var hoverimages = document.getElementsByClassName('pmf-hover-img');
  for (i = 0; i < hoverimages.length; i++) {
    hoverimages[i].addEventListener("mouseover", hoverimageHighlight);
    hoverimages[i].addEventListener("mouseout", hoverimageUnlight);
  }
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


function chaptersInit() {
  var menuContainers = document.getElementsByClassName('PMF-Chapter-Menu-Container');
  var menuPointers = document.getElementsByClassName('PMF-Chapter-Menu-Pointer');
  var myPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  myPage = myPage.substring(0, (myPage.length - 5));

  switch (myPage) {
    case "Concept":
		menuInt = 0;
		menuPointers[menuInt].style.color = "#818181";
		menuPointers[menuPointers.length-1].style.color = "#818181";
		document.getElementsByClassName('PMF-Chapter-Menu-Top')[0].style.backgroundColor  = "#818181";
		document.getElementsByClassName('PMF-Chapter-Menu-Bottom')[0].style.backgroundColor  = "#818181";
		menuPointers[menuInt].style.opacity = 1;
      break;
    case "Initiating":
      menuInt = 1;
	  menuPointers[menuInt].style.color = "#03acd7";
		menuPointers[menuPointers.length-1].style.color = "#03acd7";
		document.getElementsByClassName('PMF-Chapter-Menu-Top')[0].style.backgroundColor  = "#03acd7";
		document.getElementsByClassName('PMF-Chapter-Menu-Bottom')[0].style.backgroundColor  = "#03acd7";
		menuPointers[menuInt].style.opacity = 1;
      break;
    case "Planning":
      menuInt = 2;
	  menuPointers[menuInt].style.color = "#1072ba";
		menuPointers[menuPointers.length-1].style.color = "#1072ba";
		document.getElementsByClassName('PMF-Chapter-Menu-Top')[0].style.backgroundColor  = "#1072ba";
		document.getElementsByClassName('PMF-Chapter-Menu-Bottom')[0].style.backgroundColor  = "#1072ba";
		menuPointers[menuInt].style.opacity = 1;
      break;
    case "Executing":
      menuInt = 3;
	  menuPointers[menuInt].style.color = "#1b4776";
		menuPointers[menuPointers.length-1].style.color = "#1b4776";
		document.getElementsByClassName('PMF-Chapter-Menu-Top')[0].style.backgroundColor  = "#1b4776";
		document.getElementsByClassName('PMF-Chapter-Menu-Bottom')[0].style.backgroundColor  = "#1b4776";
		menuPointers[menuInt].style.opacity = 1;
      break;
    case "Closing":
      menuInt = 4;
	  menuPointers[menuInt].style.color = "#1b1d47";
		menuPointers[menuPointers.length-1].style.color = "#1b1d47";
		document.getElementsByClassName('PMF-Chapter-Menu-Top')[0].style.backgroundColor  = "#1b1d47";
		document.getElementsByClassName('PMF-Chapter-Menu-Bottom')[0].style.backgroundColor  = "#1b1d47";
		menuPointers[menuInt].style.opacity = 1;
      break;
	  case "Monitoring-Controlling":
      menuInt = 5;
	  menuPointers[menuInt].style.color = "#00274e";
		menuPointers[menuPointers.length-1].style.color = "#00274e";
		document.getElementsByClassName('PMF-Chapter-Menu-Top')[0].style.backgroundColor  = "#00274e";
		document.getElementsByClassName('PMF-Chapter-Menu-Bottom')[0].style.backgroundColor  = "#00274e";
      break;
  }
	menuPointers[menuPointers.length-1].style.opacity = 1;
  	menuContainers[menuInt].firstChild.style.opacity = 1;
}

function elementsInit() {
  var menuContainers = document.getElementsByClassName('PMF-Elements-Menu-Container');
  var menuPointers = document.getElementsByClassName('PMF-Elements-Menu-Pointer');
  var myPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  myPage = myPage.substring(0, (myPage.length - 5));
  
  switch (myPage) {
    case "Recommended-Practices":
		menuInt = 0;
		menuPointers[menuInt].style.color = "#13a89e";
		document.getElementsByClassName('PMF-Elements-Menu-Top')[0].style.backgroundColor  = "#13a89e";
		document.getElementsByClassName('PMF-Elements-Menu-Bottom')[0].style.backgroundColor  = "#13a89e";
      break;
    case "Roles":
      menuInt = 1;
	  menuPointers[menuInt].style.color = "#a47c6c";
		document.getElementsByClassName('PMF-Elements-Menu-Top')[0].style.backgroundColor  = "#a47c6c";
		document.getElementsByClassName('PMF-Elements-Menu-Bottom')[0].style.backgroundColor  = "#a47c6c";
      break;
    case "Processes":
      menuInt = 2;
	  menuPointers[menuInt].style.color = "#d51c5c";
		document.getElementsByClassName('PMF-Elements-Menu-Top')[0].style.backgroundColor  = "#d51c5c";
		document.getElementsByClassName('PMF-Elements-Menu-Bottom')[0].style.backgroundColor  = "#d51c5c";
      break;
    case "Activities":
      menuInt = 3;
	  menuPointers[menuInt].style.color = "#ef4036";
		document.getElementsByClassName('PMF-Elements-Menu-Top')[0].style.backgroundColor  = "#ef4036";
		document.getElementsByClassName('PMF-Elements-Menu-Bottom')[0].style.backgroundColor  = "#ef4036";
      break;
    case "Tools":
      menuInt = 4;
	  menuPointers[menuInt].style.color = "#0b9444";
		document.getElementsByClassName('PMF-Elements-Menu-Top')[0].style.backgroundColor  = "#0b9444";
		document.getElementsByClassName('PMF-Elements-Menu-Bottom')[0].style.backgroundColor  = "#0b9444";
      break;
	case "Outputs":
      menuInt = 5;
	  menuPointers[menuInt].style.color = "#7f3f98";
		document.getElementsByClassName('PMF-Elements-Menu-Top')[0].style.backgroundColor  = "#7f3f98";
		document.getElementsByClassName('PMF-Elements-Menu-Bottom')[0].style.backgroundColor  = "#7f3f98";
      break;
  }

  menuContainers[menuInt].firstChild.style.opacity = 1;
  menuPointers[menuInt].style.opacity = 1;
}
