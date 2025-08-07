document.addEventListener("DOMContentLoaded", function() {
  var toggle = document.getElementById('toggleMenu');
  var menuItems = document.querySelectorAll('#menu li a');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      toggle.checked = false;
    });
  });
});
