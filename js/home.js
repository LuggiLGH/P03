
// Home Image Animation [ Referenced from geeksforgeeks : https://www.geeksforgeeks.org/javascript/how-to-create-frame-by-frame-animation-using-css-and-javascript/ ]
var images = new Array();

images = [
  'assets/img/home/aboutIllust1.webp',
  'assets/img/home/aboutIllust2.webp'
];

setInterval(Animate, 400);
var i = 0;

function Animate() {
  var aboutIllust = document.getElementById("aboutIllust");
  if (!aboutIllust) return;

  aboutIllust.src = images[i];
  i++;

  if (i === images.length) {
    i = 0;
  }
}

// Gallery Filter [ Referenced from w3schools : https://www.w3schools.com/howto/howto_js_portfolio_filter.asp ]

filterGallery("all")
function filterGallery(c) {
  var x, i;
  x = document.getElementsByClassName("content");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btnContainer");
if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("button");
  for (var buttonIndex = 0; buttonIndex < btns.length; buttonIndex++) {
    btns[buttonIndex].addEventListener("click", function(){
      var current = btnContainer.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}


var coll = document.getElementsByClassName("otherProject");
var prefersReducedMotion = window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

Array.prototype.forEach.call(coll, function(button) {
  var content = button.nextElementSibling;
  var animationFrame;

  content.style.height = "0px";

  button.addEventListener("click", function() {
    var isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    button.classList.toggle("active", !isExpanded);
    content.setAttribute("aria-hidden", String(isExpanded));

    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }

    if (isExpanded) {
      if (prefersReducedMotion) {
        content.style.height = "0px";
        content.setAttribute("hidden", "");
        return;
      }

      content.style.height = content.scrollHeight + "px";
      animationFrame = window.requestAnimationFrame(function() {
        content.style.height = "0px";
      });
    } else {
      content.removeAttribute("hidden");

      if (prefersReducedMotion) {
        content.style.height = "auto";
        return;
      }

      content.style.height = "0px";
      animationFrame = window.requestAnimationFrame(function() {
        content.style.height = content.scrollHeight + "px";
      });
    }
  });

  content.addEventListener("transitionend", function(event) {
    if (event.propertyName !== "height") {
      return;
    }

    if (button.getAttribute("aria-expanded") === "true") {
      content.style.height = "auto";
    } else {
      content.setAttribute("hidden", "");
    }
  });
});