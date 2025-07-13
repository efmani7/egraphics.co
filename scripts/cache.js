// Clear sessionStorage on page unload (e.g., tab close or reload)
window.addEventListener("beforeunload", () => {
  sessionStorage.clear();
});

// Or localStorage (careful, this is persistent across sessions)
window.addEventListener("beforeunload", () => {
  localStorage.clear();
});
