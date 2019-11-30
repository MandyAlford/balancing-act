
var closeImg = document.querySelector("#close-message");
var navDashboard= document.querySelector("#nav-dashboard");
var navTransactions= document.querySelector("#nav-transactions");
var navAssets= document.querySelector("#nav-assets");
var navIcons= document.querySelector(".navigation");
var financialOverview= document.querySelector(".financial-overview");
var transactionOverview= document.querySelector(".transaction-wrapper");

// closeImg.addEventListener("click", removeWelcome);
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
    addTransactionsView();
  } else if (event.target===navAssets){
    navDashboard.classList.remove("active");
    navTransactions.classList.remove("active");
    removeDashboardView();
  }
}

function removeDashboardView (){
    financialOverview.remove();
    transactionOverview.remove();
//   } else if (navDashboard.classList.contains("active")){
//     console.log("dash was clicked")
//     addFinancialOverview();
//     addTransactionOverview();
  }

var financialOverviewSection = document.createElement('section');
  financialOverviewSection.setAttribute('class','financial-overview');
  financialOverviewSection.innerHTML = `
    <h1>Balancing Act</h1>
    <section id="welcome-message">
      <img class ="close" id="close-message" src="assets/Balancing Act/close.svg"</img>
      <p class="greeting">Welcome, Oscar!</p>
    </section>
    <section class="personal-summary">
      <section class="financial-totals">
        <p class="personal-total-label">INCOME</p>
        <p class="personal-total-number">$2,119.12</p>
      </section>
      <section class="financial-totals">
        <p class="personal-total-label">EXPENSES</p>
        <p class="personal-total-number">$420.54</p>
      </section>
      <section class="financial-totals">
        <p class="personal-total-label">CREDIT SCORE</p>
        <p class="personal-total-number">673</p>
      </section>
    </section>
    <section id="accounts">
      <div class="account-container">
        <h2>Accounts</h2>
        <button class="button" id="manage-acct-btn">MANAGE ACCOUNTS</button>
      </div>
      <section class="account">
        <img class="acct-icons"src="assets/Balancing Act/checking.svg">
        <p class="acct-source">Wells Fargo</p>
        <p class="acct-type">Checking</p>
      </section>
      <section class="account">
        <img class="acct-icons"src="assets/Balancing Act/savings.svg">
        <p class="acct-source">Wells Fargo</p>
        <p class="acct-type">Savings</p>
      </section>
      <section class="account">
        <img class="acct-icons"src="assets/Balancing Act/credit-card.svg">
        <p class="acct-source">Amazon Credit</p>
        <p class="acct-type">Credit Card</p>
      </section>
      <section class="account">
        <img class="acct-icons"src="assets/Balancing Act/credit-card.svg">
        <p class="acct-source">Southwest Credit</p>
        <p class="acct-type">Credit Card</p>
      </section>
    </section>
  `
  document.getElementById('left').appendChild(financialOverviewSection);

  var transactionOverviewSection = document.createElement('section');
    transactionOverviewSection.setAttribute('class','transaction-wrapper');
    transactionOverviewSection.innerHTML = `
    <section class="transaction-wrapper">
      <section class="transaction-container">
        <h2>Recent Transactions</h2>
        <button class="button" id="new-transaction-btn">NEW TRANSACTION</button>
      </section>
        <section class="transactions">
          <section class="transaction-header">
            <p class="date">Date</p>
            <p class="payee">Payee</p>
            <p class="inflow">Inflow</p>
            <p class="outflow">Outflow</p>
          </section>
          <section class="individual-transaction">
            <p class="date">Oct 25, 2019</p>
            <p class="payee">Target</p>
            <p class="inflow">-</p>
            <p class="outflow">$82.35</p>
          </section>
          <section class="individual-transaction">
            <p class="date">Oct 24, 2019</p>
            <p class="payee">Express</p>
            <p class="inflow">-</p>
            <p class="outflow">$212.24</p>
          </section>
          <section class="individual-transaction">
            <p class="date">Oct 22, 2019</p>
            <p class="payee">Paycheck</p>
            <p class="inflow">$1,319.12</p>
            <p class="outflow">-</p>
          </section>
          <section class="individual-transaction">
            <p class="date">Oct 21, 2019</p>
            <p class="payee">Trader Joe's</p>
            <p class="inflow">-</p>
            <p class="outflow">$54.92</p>
          </section>
          <section class="individual-transaction">
            <p class="date">Oct 20, 2019</p>
            <p class="payee">Shell</p>
            <p class="inflow">-</p>
            <p class="outflow">$46.23</p>
          </section>
          <section class="individual-transaction">
            <p class="date">Oct 19, 2019</p>
            <p class="payee">Rent</p>
            <p class="inflow">$800.00</p>
            <p class="outflow">-</p>
          </section>
          <section class="individual-transaction">
            <p class="date">Oct 19, 2019</p>
            <p class="payee">Hapa Sushi</p>
            <p class="inflow">-</p>
            <p class="outflow">$13.97</p>
          </section>
          <section class="individual-transaction">
            <p class="date">Oct 18, 2019</p>
            <p class="payee">Pig Train</p>
            <p class="inflow">-</p>
            <p class="outflow">$4.83</p>
          </section>
          <section class="individual-transaction">
            <p class="date">Oct 18, 2019</p>
            <p class="payee">RTD</p>
            <p class="inflow">-</p>
            <p class="outflow">$6.00</p>
          </section>
      </section>
    </section>
    `
    document.getElementById('right').appendChild(transactionOverviewSection);





function addDashboardView(){

  }

  function addTransactionsView(){

  }
