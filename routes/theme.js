// Load theme and animation settings from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const savedAnimation = localStorage.getItem("pageAnimation") || "flip";
  document.documentElement.setAttribute("data-animation", savedAnimation);
}

// Toggle between light & dark mode
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Keep animation style when theme changes
  const currentAnimation = document.documentElement.getAttribute("data-animation") || "flip";
  localStorage.setItem("pageAnimation", currentAnimation);
}

document.addEventListener("DOMContentLoaded", () => {
  loadTheme();

  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
  }
});
