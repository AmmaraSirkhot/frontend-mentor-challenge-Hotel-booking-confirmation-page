// 1. Select the HTML elements using their ID attributes
const toggleBtn = document.getElementById('menu-toggle-btn');
const dropdownMenu = document.getElementById('guest-dropdown');

// 2. Listen for clicks on the toggle button
toggleBtn.addEventListener('click', (e) => {
  // Prevents the window click listener below from immediately closing the menu
  e.stopPropagation();
  
  // Toggles the 'open' class on the menu (adds it if missing, removes it if present)
  const isOpen = dropdownMenu.classList.toggle('open');
  
  // Updates the accessibility attribute so screen readers know if it's open
  toggleBtn.setAttribute('aria-expanded', isOpen);
});

// 3. Listen for clicks anywhere on the document/screen
document.addEventListener('click', (e) => {
  // If the click happened outside the menu AND outside the button
  if (!dropdownMenu.contains(e.target) && e.target !== toggleBtn) {
    // Hide the menu by removing the 'open' class
    dropdownMenu.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
});