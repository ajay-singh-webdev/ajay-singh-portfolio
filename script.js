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

window.onload = typeName;

// Theme toggle logic
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
