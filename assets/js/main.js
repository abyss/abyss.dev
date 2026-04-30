document.addEventListener('DOMContentLoaded', function () {
  var html = document.documentElement;

  // --- Theme toggle ---
  var toggle = document.getElementById('theme-toggle');
  var sunIcon = toggle && toggle.querySelector('.icon-sun');
  var moonIcon = toggle && toggle.querySelector('.icon-moon');

  function syncIcons() {
    if (!sunIcon || !moonIcon) return;
    var isDark = html.classList.contains('dark');
    sunIcon.style.display = isDark ? 'block' : 'none';
    moonIcon.style.display = isDark ? 'none' : 'block';
  }

  syncIcons();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isDark = html.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      syncIcons();
    });
  }

  // --- Hamburger ---
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  var navOpen = false;

  function openNav() {
    if (!mobileNav) return;
    navOpen = true;
    mobileNav.style.maxHeight = mobileNav.scrollHeight + 'px';
    mobileNav.style.opacity   = '1';
    hamburger && hamburger.setAttribute('aria-expanded', 'true');
    hamburger && hamburger.classList.add('is-open');
  }

  function closeNav() {
    if (!mobileNav) return;
    navOpen = false;
    mobileNav.style.maxHeight = '0';
    mobileNav.style.opacity   = '0';
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
    hamburger && hamburger.classList.remove('is-open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      navOpen ? closeNav() : openNav();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });
  }
});
