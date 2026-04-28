// NAV MENU 
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("active");
  });

  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      toggle.classList.remove("active");
    });
  });
}

// GET INVOLVED 
const toggleButton = document.getElementById("toggleButton");
const formPopup = document.getElementById("applicationForm");

if (toggleButton && formPopup) {
  toggleButton.onclick = () => {
    formPopup.style.display = "flex";
  };

  function closeForm() {
    formPopup.style.display = "none";
  }

  window.addEventListener("click", (e) => {
    if (e.target === formPopup) closeForm();
  });

  const form = document.getElementById("appForm");
  if (form) {
    form.addEventListener("submit", function(e){
      e.preventDefault();
      alert("Application submitted!");
      this.reset();
      closeForm();
    });
  }
}

// Share popup
function openShare() {
  const el = document.getElementById("sharePopup");
  if (el) el.style.display = "flex";
}

function closeShare() {
  const el = document.getElementById("sharePopup");
  if (el) el.style.display = "none";
}

//  ABOUT PAGE 
function openModal(name, role, bio) {
  const modal = document.getElementById("teamModal");
  if (!modal) return;


  if (modal.style.display === "flex") {
    modal.style.display = "none";
    return;
  }

  modal.style.display = "flex";
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalRole").innerText = role;
  document.getElementById("modalBio").innerText = bio;
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("teamModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const cards = document.querySelectorAll('.team-card');
if (cards.length > 0) {
  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer1.observe(card));
}

//  BLOG 
function showTab(tab, event) {
  document.querySelectorAll('.grid').forEach(g => g.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  const selected = document.getElementById(tab);
  if (selected) selected.classList.add('active');

  if (event) event.target.classList.add('active');
}

const items = document.querySelectorAll('.fade-in');
if (items.length > 0) {
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  });

  items.forEach(el => observer2.observe(el));
}

//  GALLERY 
const images = document.querySelectorAll(".Gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

if (images.length && lightbox && lightboxImg && closeBtn) {
  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
}

//  CONTACT 
function showDetails(type) {
  const all = document.querySelectorAll('.details');
  all.forEach(d => d.style.display = 'none');

  const selected = document.getElementById(type);
  if (selected) selected.style.display = 'block';
}