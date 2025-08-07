document.addEventListener("DOMContentLoaded", function() {
  var toggle = document.getElementById('toggleMenu');
  var menuLinks = document.querySelectorAll('#menu a');
  var menuToggle = document.getElementById('menuToggle');

  function resetMenuTogglePosition() {
    menuToggle.style.position = 'relative'; 
    menuToggle.style.top = '43px'; 
    menuToggle.style.left = '17px'; 
  }

  menuLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      toggle.checked = false;
      resetMenuTogglePosition();
    });
  });
});
