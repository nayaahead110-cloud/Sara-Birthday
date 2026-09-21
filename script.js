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
   الانتقال للرسالة الأخيرة
========================= */

nextButton.addEventListener("click", () => {

  document.body.style.opacity = "0";

  document.body.style.transition = "opacity .7s ease";

  setTimeout(() => {

    window.location.href = "message.html";

  }, 700);

});
