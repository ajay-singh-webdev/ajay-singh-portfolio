
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

function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
