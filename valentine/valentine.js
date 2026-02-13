const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelectorAll(".question")[1];
const btnGroup = document.querySelector(".btn-group"); // Sélection du conteneur des boutons

let clickCount = 0; // Compteur de clics sur le bouton "Yes"

yesBtn.addEventListener("click", () => {
  if (clickCount === 0) {
    question.innerHTML = "Je t'aime bien aussi";
    secondQuestion.innerHTML = "Veux-tu être ma Valentine ?";
    img.src = "kat.jpg";
    clickCount++;
  } else if (clickCount === 1) {
    question.innerHTML = "Moi Samuel le mignon garçon de sa maman";
    secondQuestion.innerHTML = "est très honoré d'être ton Valentin ❤️";
    img.src = "kitty.jpg"; // Remplace avec une image appropriée
    
    // Supprimer les boutons après le message final
    btnGroup.style.display = "none";
  }
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
