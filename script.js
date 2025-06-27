// Typing animation
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

window.onload = () => {
  typeName();

  // Load theme on page load
  const currentTheme = localStorage.getItem("theme");
  const themeToggle = document.getElementById("theme-toggle");

  if (currentTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }

  // Toggle dark/light mode
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
};

// Tab switcher (About section)
function showTab(id) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
