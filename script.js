const hero = document.getElementById("hero");
const message = document.getElementById("message");
const memories = document.getElementById("memories");
const letter = document.getElementById("letter");

const startBtn = document.getElementById("startBtn");
const memoriesBtn = document.getElementById("memoriesBtn");
const letterBtn = document.getElementById("letterBtn");
const celebrateBtn = document.getElementById("celebrateBtn");


function showSection(current, next) {

  current.classList.add("hidden");

  next.classList.remove("hidden");

  next.classList.add("show");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* فتح الموقع */

startBtn.addEventListener("click", () => {

  showSection(hero, message);

});


/* الانتقال للذكريات */

memoriesBtn.addEventListener("click", () => {

  showSection(message, memories);

});


/* فتح الرسالة */

letterBtn.addEventListener("click", () => {

  showSection(memories, letter);

});


/* الاحتفال */

celebrateBtn.addEventListener("click", () => {

  createConfetti();

});


function createConfetti() {

  const container =
    document.getElementById("confetti");

  const pieces = 100;

  for (let i = 0; i < pieces; i++) {

    const piece =
      document.createElement("div");

    piece.classList.add("confetti-piece");

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.animationDelay =
      Math.random() * 1.5 + "s";

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    const size =
      Math.random() * 8 + 5;

    piece.style.width =
      size + "px";

    piece.style.height =
      size * 1.6 + "px";

    /*
      نستخدم ألوان عشوائية للكونفيتي
    */

    const colors = [
      "#a875ff",
      "#ff9fcf",
      "#ffffff",
      "#d3b4ff",
      "#ffd166"
    ];

    piece.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];

    container.appendChild(piece);


    setTimeout(() => {

      piece.remove();

    }, 4500);

  }

}
