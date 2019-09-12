var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
  navbar.classList.add("stickyNav")
  } else {
  navbar.classList.remove("stickyNav");
  }
}
