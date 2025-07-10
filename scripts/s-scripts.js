document.addEventListener('DOMContentLoaded', function () {
  // ==== 1. DevTools Detection via Console Object Trick ====
  let devtoolsOpened = false;

  const element = new Image();
  Object.defineProperty(element, 'id', {
    get: function () {
    devtoolsOpened = true;
     window.location.href = 'https://www.google.com'; // Redirect if DevTools is inspected
   }
 });
  console.log(element); // Triggers the getter when DevTools is open

  // ==== 2. Disable Image Dragging ====
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.addEventListener('dragstart', e => e.preventDefault());
  });
  
// ==== 4. Redirect on = Press ==== 
  window.addEventListener('keydown', function (e) {
    if (e.key === '=') { 
      e.preventDefault(); // Might not stop DevTools in most browsers
      window.location.href = 'https://www.google.com/';
    }
  });

  // ==== 3. Disable Right Click ====
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // ==== 4. Redirect on F12 Press ====
  window.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
      e.preventDefault(); // Might not stop DevTools in most browsers
      window.location.href = 'https://www.google.com/';
    }
  });

  // ==== 5. Redirect on Resize ====
 window.addEventListener('resize', function () {
   window.location.href = 'https://www.google.com/';
  });

  // ==== 6. Redirect on Meta Key (Command / Windows Key) Press ====
  window.addEventListener('keydown', function (e) {
    if (e.metaKey) {
      window.location.href = 'https://www.google.com/';
    }
  });

  // ==== 7. Redirect on Ctrl Key Press ====
  window.addEventListener('keydown', function (e) {
    if (e.ctrlKey) {
      window.location.href = 'https://www.google.com/';
    }
  });
});
