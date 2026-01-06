document.addEventListener('DOMContentLoaded', function () {
  // ==== Device Check ====
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // ==== 1. DevTools Detection via Console Object Trick ====
  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function () {
      window.location.href = 'https://www.google.com'; // Redirect if DevTools is inspected
    }
  });
  console.log(element); // Triggers the getter when DevTools is open

  // ==== 2. Disable Image Dragging ====
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.addEventListener('dragstart', e => e.preventDefault());
  });

  // ==== 3. Disable Right Click ====
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // ==== 4. Redirect on Dangerous Keys (Desktop Only) ====
  window.addEventListener('keydown', function (e) {
    if (!isMobile) {
      if (e.key === 'F12' || e.ctrlKey || e.metaKey || e.key === '=') {
        e.preventDefault();
        window.location.href = 'https://www.google.com/';
      }
    }
  });

  // ==== 5. Redirect on Resize (Desktop Only) ==== 
  let initialWidth = window.innerWidth;
  let initialHeight = window.innerHeight;

  window.addEventListener('resize', function () {
    if (!isMobile) {
      const widthDiff = Math.abs(window.innerWidth - initialWidth);
      const heightDiff = Math.abs(window.innerHeight - initialHeight);
      if (widthDiff > 150 || heightDiff > 150) {
        window.location.href = 'https://www.google.com/';
      }
    }
  });

  document.querySelectorAll('img').forEach(img => {
  // Disable dragging
  img.setAttribute('draggable', 'false');
  img.addEventListener('dragstart', e => e.preventDefault());

  // Disable context menu (right-click)
  img.addEventListener('contextmenu', e => e.preventDefault());

  // Disable long press on mobile
  img.addEventListener('touchstart', function (e) {
    img.longPressTimer = setTimeout(() => {
      e.preventDefault(); // Cancel long press menu
    }, 300); // Adjust time if needed
  });

  img.addEventListener('touchend', () => clearTimeout(img.longPressTimer));
  img.addEventListener('touchmove', () => clearTimeout(img.longPressTimer));
});

});
