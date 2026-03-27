/* ========================================
   BURGER MENU FUNCTIONALITY
======================================== */

// Get burger menu elements
const burgerBtn = document.querySelector('.burger-menu-btn');
const burgerMenu = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.menu-close-btn');
const burgerMenuLinks = document.querySelectorAll('.nav-burger-menu-link');

// Function to open burger menu
function openBurgerMenu() {
  burgerMenu.classList.remove('is-closed');
  burgerMenu.classList.add('is-open');
  // Prevent body scroll when menu is open
  document.body.style.overflow = 'hidden';
}

// Function to close burger menu
function closeBurgerMenu() {
  burgerMenu.classList.remove('is-open');
  burgerMenu.classList.add('is-closed');
  // Restore body scroll
  document.body.style.overflow = '';
}

// Event listeners for burger menu
if (burgerBtn && burgerMenu && closeBtn) {
  // Open menu when burger button is clicked
  burgerBtn.addEventListener('click', openBurgerMenu);

  // Close menu when close button is clicked
  closeBtn.addEventListener('click', closeBurgerMenu);

  // Close menu when clicking outside the menu
  burgerMenu.addEventListener('click', e => {
    if (e.target === burgerMenu) {
      closeBurgerMenu();
    }
  });

  // Close menu when clicking on navigation links
  burgerMenuLinks.forEach(link => {
    link.addEventListener('click', closeBurgerMenu);
  });

  // Close menu with Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && burgerMenu.classList.contains('is-open')) {
      closeBurgerMenu();
    }
  });
}

/* ========================================
   LESSON CARDS FUNCTIONALITY
======================================== */

const lessonsButtons = document.querySelectorAll('.lesson-card-btn');
const applicationSection = document.getElementById('leave-app');

if (applicationSection) {
  lessonsButtons.forEach(button => {
    button.addEventListener('click', () => {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
