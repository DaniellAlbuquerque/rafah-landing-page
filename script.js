
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const carrossel = document.querySelector(".carrossel");
const items = document.querySelectorAll(".item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function showSlide(n) {
  if (n < 0) index = items.length - 1;
  else if (n >= items.length) index = 0;
  else index = n;

  carrossel.style.transform = `translateX(${-index * 100}%)`;
}

prev.addEventListener("click", () => showSlide(index - 1));
next.addEventListener("click", () => showSlide(index + 1));

// Auto play (troca a cada 5s)
setInterval(() => {
  showSlide(index + 1);
}, 7000);

