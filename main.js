
var closeImg = document.querySelector("#close-message");
var navDashboard= document.querySelector("#nav-dashboard");
var navTransactions= document.querySelector("#nav-transactions");
var navAssets= document.querySelector("#nav-assets");
var navIcons= document.querySelector(".navigation");
var financialOverview= document.querySelector(".financial-overview");
var transactionOverview= document.querySelector(".transaction-wrapper");

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
    event.target.classList.toggle("active");
    deActivateNavItem();
  }
}

function deActivateNavItem(){
  if (event.target===navDashboard){
    navTransactions.classList.remove("active");
    navAssets.classList.remove("active");
    addDashboardView();
  } else if (event.target===navTransactions){
    navDashboard.classList.remove("active");
    navAssets.classList.remove("active");
    removeDashboardView();
  } else if (event.target===navAssets){
    navDashboard.classList.remove("active");
    navTransactions.classList.remove("active");
    removeDashboardView();
  }
}

function removeDashboardView (){
  if (navTransactions.classList.contains("active")){
    console.log("trans was clicked")
    financialOverview.remove();
    transactionOverview.remove();
//   } else if (navDashboard.classList.contains("active")){
//     console.log("dash was clicked")
//     addFinancialOverview();
//     addTransactionOverview();
  }
}

function addDashboardView(){
    console.log("dash was clicked");
  }
