const lessonsButtons = document.querySelectorAll('.lesson-card-btn');
const applicationSection = document.getElementById('leave-app');

if (applicationSection) {
  lessonsButtons.forEach(button => {
    button.addEventListener('click', () => {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
