// password_reset_confirm.js

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.toggle-password');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target');
      const input = document.getElementById(targetId);

      if (input.type === 'password') {
        input.type = 'text';
        toggle.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Change icon
      } else {
        input.type = 'password';
        toggle.innerHTML = '<i class="fas fa-eye"></i>';
      }
    });
  });
});
