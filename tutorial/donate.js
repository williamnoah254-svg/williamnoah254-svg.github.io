const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
});

/* CLOSE WHEN CLICKING A LINK */
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    toggle.classList.remove("active");
  });
});

function showDetails(type) {
  const all = document.querySelectorAll('.details');
  all.forEach(d => d.style.display = 'none');

  const selected = document.getElementById(type);
  selected.style.display = 'block';
}
