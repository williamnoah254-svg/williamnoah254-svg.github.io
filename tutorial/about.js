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


// modal for images click effects
function openModal(name, role, bio) {
  document.getElementById("teamModal").style.display = "flex";
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalRole").innerText = role;
  document.getElementById("modalBio").innerText = bio;
}

function closeModal() {
  document.getElementById("teamModal").style.display = "none";
}

window.onclick = function(e) {
  const modal = document.getElementById("teamModal");
  if (e.target === modal) closeModal();
}

const cards = document.querySelectorAll('.team-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


