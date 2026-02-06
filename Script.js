const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");
const bgMusic = document.getElementById("bgMusic");
const yesSound = document.getElementById("yesSound");
const musicToggle = document.getElementById("musicToggle");

/* NAME TYPING ANIMATION */
const nameText = document.getElementById("nameText");
const name = "Zoya";
let i = 0;

function typeName() {
  if (i < name.length) {
    nameText.innerHTML += name.charAt(i);
    i++;
    setTimeout(typeName, 300);
  }
}
typeName();

/* NO BUTTON AVOIDS */
function moveNo() {
  noBtn.style.left = Math.random() * 250 + "px";
  noBtn.style.top = Math.random() * 40 + "px";
}
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

/* MUSIC TOGGLE */
musicToggle.onclick = () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.innerText = "⏸ Pause Music";
  } else {
    bgMusic.pause();
    musicToggle.innerText = "🎵 Play Music";
  }
};

/* YES BUTTON – MULTI STAGE */
yesBtn.onclick = () => {
  yesSound.play();

  card.innerHTML = `
    <h2 class="name">Zoya 💖</h2>
    <p>I knew you love me 😘💘</p>
    <p>One more thing...</p>
  `;

  setTimeout(() => {
    card.innerHTML = `
      <h2>Will you walk this journey with me? 💍</h2>
      <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif">
      <br><br>
      <a class="share" target="_blank"
        href="https://wa.me/?text=Zoya%20said%20YES%20💖%20Check%20this%20out!">
        📲 Share on WhatsApp
      </a>
    `;
  }, 2000);
};

/* FLOATING HEARTS */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);
