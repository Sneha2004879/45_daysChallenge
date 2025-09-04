const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Button text change
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "Light Mode";
  } else {
    toggleBtn.textContent = "Dark Mode";
  }
});
