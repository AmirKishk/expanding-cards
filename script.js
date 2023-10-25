const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActice();
    panel.classList.add("active");
  });
});

function removeActice() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
