const navbar = document.querySelector(".navbar-nav");

document.querySelector("#hamburger").onclick = (e) => {
  e.preventDefault();
  navbar.classList.toggle("active");
};
