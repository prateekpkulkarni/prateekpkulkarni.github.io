document.addEventListener('DOMContentLoaded', function() {
  const modeToggle = document.getElementById('mode-toggle');

  modeToggle.addEventListener('click', function() {
    console.log('Toggle button clicked');
    document.body.classList.toggle('dark-mode');
    console.log('Dark mode toggled:', document.body.classList.contains('dark-mode'));
  });
});
