document.addEventListener("DOMContentLoaded", () => {
  const cat = document.querySelector(".cat");
  const status = document.getElementById("status");
  const replayButton = document.getElementById("replay");

  /* ------------------------ */
  /*      Animation Start     */
  /* ------------------------ */
  cat.addEventListener("animationstart", () => {
    status.textContent = "⬜ Started";
  });

  /* ------------------------ */
  /*       Animation End      */
  /* ------------------------ */
  cat.addEventListener("animationend", () => {
    status.textContent = "⬛ Ended";
  });

  // Replay Animation
  replayButton.addEventListener("click", () => {
    cat.style.animation = "none";
    requestAnimationFrame(function () {
      cat.style.animation = "walk-cycle steps(11) 1s";
    });
  });
});
