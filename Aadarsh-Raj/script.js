const logo = document.querySelector(".logo");
const animatedBtn = document.querySelector(".animated-btn");
const backgroundContainer = document.querySelector(".background-container");
const formContainer = document.querySelector(".user-form-container");

const closeFormContainer = document.querySelector(".top-right");
const donateBtn = document.querySelectorAll(".donate-btn");
closeFormContainer.addEventListener("click", ()=>{
    formContainer.style.display = "none";
})
const logoAnime = () =>{
    const logotxt = "ARYA Funds"
    logo.innerText = "";
    let index = 0;
    
  function appendNextCharacter() {
    if (index < logotxt.length) {
      logo.append(logotxt.charAt(index));
      index++;
      setTimeout(appendNextCharacter, 300); // Call itself after 1 second
    }
  }

  appendNextCharacter();
}
logoAnime();
function changeText(){
    animatedBtn.innerText ="FEEL GOOD LATER";
}
function resetText(){
    animatedBtn.innerText = "DONATE NOW";
}
animatedBtn.addEventListener("click",()=>{
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = '❤️';
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
  
    heart.style.left = randomX + 'px';
    heart.style.top = randomY + 'px';
  
    backgroundContainer.appendChild(heart);
    setTimeout(()=>{
        heart.remove();

    }, 2000);
});


donateBtn.forEach((element)=>{
    element.addEventListener("click",()=>{
        formContainer.style.display = "flex";
    })
})