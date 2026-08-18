// Theme toggle. The initial value is applied inline in <head> (see
// partials/head.html) so there is no flash; this only wires the button.
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  var root = document.documentElement;

  function sync() {
    var dark = root.getAttribute('data-theme') === 'dark';
    btn.setAttribute('aria-pressed', String(dark));
    btn.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  btn.addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') !== 'dark';
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    try {
      localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
    } catch (e) {
      /* private mode — the toggle still works for this page view */
    }
    sync();
  });

  sync();
})();
