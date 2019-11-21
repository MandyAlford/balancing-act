
var closeImg = document.querySelector("#close-message")
closeImg.addEventListener("click", removeWelcome);

function removeWelcome(event) {
  if (event.target.classList.contains("close")){
    console.log("I was clicked");
   event.target.parentElement.remove()
   }
  }
