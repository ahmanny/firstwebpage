// for changing the menu  bar from bars to x
function functions(x) {
  x.classList.toggle("change");
}
// toggles the menu bar
$(document).ready(function () {
  $(".btn").click(function () {
    $(".nav-bar").toggle();
  });
});
// togles pages
$(document).ready(function () {
  $(".pages").click(function () {
    $(".nav-bar2").toggle();
  });
});

// changes to be made in dark mode and light mode
function mode_change() {
  var x = document.getElementById("myDIV");
  var y = document.getElementById("row");
  var z = document.getElementById("logo2");
  var v = document.getElementById("log");
  var a = document.getElementById("menu");
  var b = document.getElementById("menus");
  var c = document.getElementById("menug");
  var s = document.getElementById("img");
  var nav = document.getElementById("navbar-menu");
  if (x.innerHTML === "light_mode") {
    x.innerHTML = "dark_mode";
    x.style.color = "black";
    z.style.zIndex = "-1";
    v.style.zIndex = "-1";
    y.style.backgroundColor = "white";
    a.style.backgroundColor = "black";
    b.style.backgroundColor = "black";
    c.style.backgroundColor = "black";
    s.style.backgroundColor = "rgb(29, 33, 68)";
    nav.style.backgroundColor = "white";
  } else {
    x.innerHTML = "light_mode";
    x.style.color = "white";
    y.style.backgroundColor = " rgb(29, 33, 68)";
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white";
    c.style.backgroundColor = "white";
    s.style.backgroundColor = " rgba(74, 108, 247,0.05)";
    nav.style.backgroundColor = "rgb(29, 33, 68)";
    z.style.zIndex = "1";
    v.style.zIndex = "1";
  }
}
// togles a dark mode class for the body
function mode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let mybutton = document.getElementById("myBtn");
var header = document.getElementById("myHeader");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    header.classList.add("sticky");
  } else {
    mybutton.style.display = "none";
    header.classList.remove("sticky");
  }
}
function topFunction() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
function toggles() {
  let element = document.getElementById("on");
  if (element.style.left === "30px") {
    element.style.left = "0px";
  } else {
    element.style.left = "30px";
  }
}
function right() {
  let elem = document.getElementById("on");
  elem.style.left = "30px";
}
function left() {
  let elem = document.getElementById("on");
  elem.style.left = "0px";
}
