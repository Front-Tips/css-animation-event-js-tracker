/* CSS Files */
import "../css/reset.css";
import "../css/tutorial.css";

/* JS Files */
import "./tutorial";

// document.addEventListener("DOMContentLoaded", () => {
//   const tuna = document.querySelector(".tuna");
//   const status = document.getElementById("status");
//   const replayButton = document.getElementById("replay");

//   /* ------------------------ */
//   /*      Animation Start     */
//   /* ------------------------ */
//   tuna.addEventListener("animationstart", () => {
//     status.textContent = "Started";
//   });

//   /* ------------------------ */
//   /*       Animation End      */
//   /* ------------------------ */
//   tuna.addEventListener("animationend", () => {
//     status.textContent = "Ended";
//   });

//   // Replay Animation
//   replayButton.addEventListener("click", function () {
//     tuna.style.animation = "none";
//     requestAnimationFrame(function () {
//       tuna.style.animation = "walk-cycle steps(11) 1s";
//     });
//   });
// });
