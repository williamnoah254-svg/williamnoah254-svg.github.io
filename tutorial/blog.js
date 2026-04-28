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


function showTab(tab) {
    document.querySelectorAll('.grid').forEach(g => g.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

    document.getElementById(tab).classList.add('active');
    event.target.classList.add('active');
}

/* Fade-in */
const items = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
});
items.forEach(el => observer.observe(el));