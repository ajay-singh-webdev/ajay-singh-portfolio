/* Base Styles */
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background: #121212;
  color: #fff;
  transition: background 0.3s, color 0.3s;
  scroll-behavior: smooth;
}

/* Navbar */
.navbar {
  padding: 14px 30px;
  background: #1f1f1f;
  position: sticky;
  top: 0;
  z-index: 1000;
  animation: slideDown 0.6s ease-in-out;
}
.nav-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
}
@keyframes slideDown {
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.logo {
  color: #ff004f;
  font-size: 20px;
  font-weight: bold;
}
.nav-links {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}
.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}
.nav-links a:hover {
  color: #ff004f;
}
#theme-toggle {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
  transition: transform 0.3s;
}
#theme-toggle:hover {
  transform: rotate(20deg);
}
.mobile-toggle {
  display: none;
  font-size: 28px;
  cursor: pointer;
  color: #ff004f;
  background: none;
  border: none;
}

/* Banner */
.banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  padding: 80px 40px;
  max-width: 1200px;
  margin: auto;
}
.banner-text {
  animation: fadeInLeft 1s ease;
}
@keyframes fadeInLeft {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.banner-text h1 {
  font-size: 42px;
}
.banner-text p {
  font-size: 20px;
}
.banner-buttons {
  margin-top: 20px;
}
.banner-buttons a {
  background: #ff004f;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  margin: 6px 10px 6px 0;
  display: inline-block;
  transition: background 0.3s;
}
.banner-buttons a:hover {
  background: #e60046;
}
.social-links {
  margin-top: 14px;
}
.social-links a {
  border: 2px solid #ff004f;
  color: #ff004f;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  margin-right: 10px;
  display: inline-block;
  transition: all 0.3s;
}
.social-links a:hover {
  background: #ff004f;
  color: white;
}
.banner-image {
  display: flex;
  justify-content: center;
  animation: fadeInRight 1s ease;
}
@keyframes fadeInRight {
  from { transform: translateX(50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.banner-image img {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.1);
  transition: transform 0.4s ease;
}
.banner-image img:hover {
  transform: scale(1.05);
}

/* Responsive Navigation and About Image Visibility */
@media (max-width: 768px) {
  .nav-top {
    flex-direction: row;
    width: 100%;
  }
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }
  .mobile-toggle {
    display: block;
  }
  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    padding-top: 10px;
  }
  .nav-links.show {
    display: flex;
  }
  #theme-toggle {
    margin-left: auto;
  }
  .banner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .banner-image {
    display: none !important;
  }
  .about-img-container {
    display: block !important;
  }
}
