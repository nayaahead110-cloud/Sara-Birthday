const openButton =
document.getElementById("openButton");

const nextButton =
document.getElementById("nextButton");

const hero =
document.querySelector(".hero");

const surprise =
document.getElementById("surprise");

/* =========================
فتح الهدية
========================= */

openButton.addEventListener("click", () => {

hero.style.opacity = "0";
hero.style.transform = "scale(.96)";

setTimeout(() => {

hero.style.display = "none";

surprise.classList.remove("hidden");

requestAnimationFrame(() => {
  surprise.classList.add("active");
});

}, 600);

});

/* =========================
الانتقال للمرحلة الجديدة
========================= */

nextButton.addEventListener("click", () => {

document.body.style.transition =
"opacity .7s ease";

document.body.style.opacity = "0";

setTimeout(() => {

window.location.href =
  "before-message.html";

}, 700);

});
