let nobuttonel = document.getElementById("nobutton");
let trashbuttonel = document.getElementById("trashbutton");
let foodel = document.getElementById("food");
let camimageel = document.getElementById("camimage");

nobuttonel.addEventListener("click", function(){
    let newtop = Math.floor(Math.random() * 100) + 50;
    let newleft = Math.floor(Math.random() * 100);
    nobuttonel.style.top = newtop + "px";
    nobuttonel.style.left = newleft + "px";
});

const container = document.getElementById("main");
const emojis = ["🌸", "💗", "💗", "❤️", "🌸", "❤️"];

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  
  emoji.style.left = Math.random() * window.innerWidth + "px";
  
  const duration = 3 + Math.random() * 2; // 3–5 seconds
  emoji.style.animationDuration = duration + "s";
  
  container.appendChild(emoji);
  
  setTimeout(() => {
    emoji.remove();
  }, duration * 1000);
}

setInterval(createEmoji, 300);
camimageel.style.height = "200px";