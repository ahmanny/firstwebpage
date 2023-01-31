function functions(x) {
  x.classList.toggle("change");
}
$(document).ready(function () {
  $(".btn").click(function () {
    $(".nav-bar").toggle();
  });
});
$(document).ready(function () {
  $(".pages").click(function () {
    $(".nav-bar2").toggle();
  });
});
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "dark_mode") {
    x.innerHTML = "light_mode";
  } else {
    x.innerHTML = "dark_mode";
  }
}
function functions() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
