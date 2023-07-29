var originalFontSize;
var isIncreased = false;

function increaseFontSize() {
  var elements = document.querySelectorAll("body, h1, p");

  if (!originalFontSize) {
    originalFontSize = [];
    for (var i = 0; i < elements.length; i++) {
      var fontSize = window.getComputedStyle(elements[i]).fontSize;
      originalFontSize.push(fontSize);
    }
  }

  if (!isIncreased) {
    for (var i = 0; i < elements.length; i++) {
      var currentSize = parseInt(window.getComputedStyle(elements[i]).fontSize);
      
      if (!isNaN(currentSize)) {
        elements[i].style.fontSize = (currentSize * 1.5) + "px";
      }
    }
    isIncreased = true;
  } else {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = originalFontSize[i];
    }
    isIncreased = false;
  }
}


  
var isContrastIncreased = false;
var originalStyles = {};

function increaseContrast() {
  var elements = document.querySelectorAll("body, h1, h2, h3, p");

  if (!isContrastIncreased) {
    for (var i = 0; i < elements.length; i++) {
      var computedStyle = window.getComputedStyle(elements[i]);
      originalStyles[i] = {
        backgroundColor: computedStyle.backgroundColor,
        color: computedStyle.color
      };
      elements[i].style.backgroundColor = "black";
      elements[i].style.color = "white";
    }
    isContrastIncreased = true;
  } else {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = originalStyles[i].backgroundColor;
      elements[i].style.color = originalStyles[i].color;
    }
    isContrastIncreased = false;
  }
}

  function skipMenu() {
    var menuItems = document.querySelectorAll("header nav ul li:not(.highlight)");
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].setAttribute("aria-hidden", "true");
      menuItems[i].setAttribute("tabindex", "-1");
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('change', function() {
      if (menuToggle.checked) {
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
      }
    });
  });