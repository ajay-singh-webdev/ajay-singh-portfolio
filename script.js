// Typing Effect
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
    setTimeout(typeRole, 50);
  }
}

window.onload = typeName;

// Tab Switching: Skills, Experience, Education
function showSection(id) {
  const allSections = document.querySelectorAll('.section');
  allSections.forEach(sec => sec.style.display = 'none');
  const active = document.getElementById(id);
  if (active) active.style.display = 'block';
}

// Scroll Animation (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
