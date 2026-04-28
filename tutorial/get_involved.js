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

// shows form and hides
document.getElementById('toggleButton').onclick = function() {
  var form = document.getElementById('applicationForm');
  if (form.style.display === "none") {
    form.style.display = "block"; 
  } else {
    form.style.display = "none";  
  }
};


const toggleButton = document.getElementById("toggleButton");
const formPopup = document.getElementById("applicationForm");

toggleButton.onclick = () => {
    formPopup.style.display = "flex";
};

function closeForm() {
    formPopup.style.display = "none";
}

window.onclick = (e) => {
    if (e.target === formPopup) {
        closeForm();
    }
};

// shows alert when you submit the form
document.getElementById("appForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Application submitted!");
    this.reset();
    closeForm();
});

// for apply button in story box
function openForm() {
    document.getElementById("applicationForm").style.display = "block";
}

function closeForm() {
    document.getElementById("applicationForm").style.display = "none";
}


// for share our mission
function openShare() {
  document.getElementById("sharePopup").style.display = "flex";
}

function closeShare() {
  document.getElementById("sharePopup").style.display = "none";
}






