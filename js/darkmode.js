const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');

// Adjust title and date colors in dark mode
const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6, .resume-date, .text-primary");

titles.forEach((title) => {
    if (document.body.classList.contains("dark-mode")) {
        title.style.color = "#ffffff";  // Change to a lighter color
    } else {
        title.style.color = "";  // Reset to original
    }
});

// Optionally, store the user's preference in local storage
if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
}
});

// Load the user's preference if they have one
window.addEventListener('load', () => {
const theme = localStorage.getItem('theme');
if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    
    // Adjust title and date colors in dark mode on load
    const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6, .resume-date, .text-primary");

    titles.forEach((title) => {
        title.style.color = "#ffffff";  // Apply the dark mode color
    });
}
});
