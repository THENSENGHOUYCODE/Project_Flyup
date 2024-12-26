// Navbar
AOS.init();
const navbar = document.querySelector("#navbar");
navbar.style.padding = "24px 0px";
window.onscroll = function (e) {
  const scrolvalue = window.scrollY;
  console.log(scrolvalue);

  var scroll = 120;
  if (window.scrollY >= scroll) {
    navbar.style.backgroundColor = "#04734b";
    navbar.style.padding = "16px 0px";
    navbar.style.transition = "0.3s";
  } else if (window.screenY < scroll) {
    navbar.style.backgroundColor = "transparent";
    navbar.style.padding = "24px 0px";
    navbar.style.transition = "0.3s";
  }
};
document.getElementById('registerBtn').addEventListener('click', function() {
  const registerForm = document.getElementById('registerForm');
  const signInForm = document.getElementById('signInForm');
  signInForm.style.display = 'none';
  registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('signInBtn').addEventListener('click', function() {
  const signInForm = document.getElementById('signInForm');
  const registerForm = document.getElementById('registerForm');
  registerForm.style.display = 'none';
  signInForm.style.display = signInForm.style.display === 'none' ? 'block' : 'none';
});
