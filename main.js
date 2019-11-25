
var closeImg = document.querySelector("#close-message");
var navDashboard= document.querySelector("#nav-dashboard");
var navTransactions= document.querySelector("#nav-transactions");
var navAssets= document.querySelector("#nav-assets");
var navIcons= document.querySelector(".navigation");

closeImg.addEventListener("click", removeWelcome);
navDashboard.addEventListener("click", activeNavItem);
navTransactions.addEventListener("click", activeNavItem);
navAssets.addEventListener("click", activeNavItem);


function removeWelcome(event) {
  if (event.target.classList.contains("close")){
   event.target.parentElement.remove()
   }
  }

function activeNavItem(event){
  if (event.target.classList.contains("navigation")){
    console.log("I was clicked");
    event.target.classList.toggle("active");
  }
}
