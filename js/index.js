const typedTextSpan = document.querySelector(".typed");
const cursorSpan = document.querySelector(".line");
const portfolioItems = document.querySelectorAll('.img-div');
const countdown = document.querySelector("#countdown");
const launchDate = new Date("Mar 1, 2023 12:00:00").getTime();
var navbar = document.querySelector('.navbar');
var links = navbar.querySelectorAll('.nav-link');


const textArray = ["WordPress Developer", "Front-End Developer", "UI/Ux Designer", "App Developer and Designer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});



// tabs
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function RemoveClass(element, name) {
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
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn-port");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// document
//   .querySelector(".first-button")
//   .addEventListener("click", function () {
//     document.querySelector(".animated-icon1").classList.toggle("open");
//   });



portfolioItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.childNodes[3].style.opacity = "1";
  });
  item.addEventListener('mouseleave', () => {
    item.childNodes[3].style.opacity = "0";
  });
});

window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  const content = document.querySelector(".content");

  setTimeout(function () {
    preloader.style.display = "none";
    content.classList.add("show");
  }, 3000);
});

// Update the count every 1 second
const interval = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the launch date
  const distance = launchDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "Launch day!";
  }
}, 1000);

// navlink collapse when click link
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    // Collapse the navbar
    navbar.querySelector('.collapse').classList.remove('show');
  });
}

document.addEventListener('click', function (event) {
  // If the click is not inside the navbar, collapse it
  if (!navbar.contains(event.target)) {
    navbar.querySelector('.collapse').classList.remove('show');
  }
});

