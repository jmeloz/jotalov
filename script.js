function mostrarMensagem() {
  alert("Só queria te lembrar que você é incrível, Marina ✨");
}
function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
function iniciarExperiencia() {
  const iframe = document.getElementById("player");
  iframe.src += "&autoplay=1";

  alert("Só fiz isso pra te ver sorrir um pouco 😊");
}
function iniciarExperiencia() {
  const videoID = "COLE_O_ID_AQUI"; // ex: ABC123XYZ
  const iframe = document.getElementById("player");

  iframe.src = `https://www.youtube.com/watch?v=oP4sBeV7llE&list=RDoP4sBeV7llE&start_radio=1${videoID}?autoplay=1&mute=0&loop=1&playlist=${videoID}`;
  
  alert("Só fiz isso pra te ver sorrir um pouco 😊");
}


setInterval(criarCoracao, 300);