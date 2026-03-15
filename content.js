document.addEventListener("keydown", (e) => {
  if (e.key === "/") {
    e.preventDefault();
    document.querySelector('[aria-label="Enter a prompt for Gemini"]').focus();
  }
});
