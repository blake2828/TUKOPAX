// assets/js/theme-toggle.js
(function () {
    const themeToggleBtn = document.getElementById("themeToggle");
    const body = document.body;

    // Load saved theme from localStorage or default to light
    const savedTheme = localStorage.getItem("theme") || "light";

    // Apply saved theme on body class
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }

    // Update toggle button icon/text on load
    updateButtonIcon(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            const isDark = body.classList.toggle("dark-mode");
            const newTheme = isDark ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            updateButtonIcon(newTheme);
        });
    }

    function updateButtonIcon(theme) {
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = theme === "light"
                ? `<i data-feather="moon"></i> Dark`
                : `<i data-feather="sun"></i> Light`;
            if (window.feather) {
                feather.replace();
            }
        }
    }
})();
