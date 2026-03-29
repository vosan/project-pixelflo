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
   FORM SUBMISSION TO GOOGLE SHEETS
======================================== */

// URL del Google Apps Script Web App da variabile d'ambiente
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxnjabHays6ULYsdzxQdrHns1eWEeqQaZsp0KADQjU0lkz3nd5AeH-0I9_yDvsUDJE/exec';

// Get form element
const leaveForm = document.querySelector('form[name="form-application"]');

if (leaveForm) {
  leaveForm.addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(leaveForm);
    const data = {
      name: formData.get('user-name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      comment: formData.get('comment'),
      teacher: formData.get('teacher'),
    };

    // Get submit button to show loading state
    const submitBtn = leaveForm.querySelector('.leave-form-btn');
    const originalBtnText = submitBtn.textContent;

    try {
      // Show loading state
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Send data to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Reset form
      leaveForm.reset();

      // Reset the first radio button to be checked
      const firstRadio = leaveForm.querySelector(
        'input[type="radio"][value="Maria"]'
      );
      if (firstRadio) {
        firstRadio.checked = true;
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      // Restore button state
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}
