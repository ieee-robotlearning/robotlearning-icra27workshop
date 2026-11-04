// Toggle the mobile navbar menu.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.navbar-burger').forEach(function (burger) {
    burger.addEventListener('click', function () {
      var menu = document.getElementById(burger.dataset.target);
      var open = burger.classList.toggle('is-active');
      menu.classList.toggle('is-active', open);
      burger.setAttribute('aria-expanded', open);
    });
  });
});
