// TYPING ANIMATION
const nameText = "Ajay Singh";
const roleText = "SEO Executive & Web Developer";
let nameIndex = 0;
let roleIndex = 0;

function typeName() {
  if (nameIndex < nameText.length) {
    document.getElementById("typing-name").innerHTML += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 100);
  } else {
    setTimeout(typeRole, 300);
  }
}

function typeRole() {
  if (roleIndex < roleText.length) {
    document.getElementById("typing-role").innerHTML += roleText.charAt(roleIndex);
    roleIndex++;
    setTimeout(typeRole, 60);
  }
}

window.onload = typeName;


// TAB SWITCHING IN ABOUT SECTION
function showSection(id) {
  const sections = document.querySelectorAll(".about-tab");
  sections.forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";

  // Highlight active button
  const buttons = document.querySelectorAll(".about-tab-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`[data-tab="${id}"]`).classList.add("active");
}


// SCROLL REVEAL ANIMATION FOR PROJECTS
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  observer.observe(card);
});


// OPTIONAL: MOBILE MENU TOGGLE (if used)
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("open");
}
