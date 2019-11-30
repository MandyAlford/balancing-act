var welcomeMessageID = "welcome-message-show";
addDashboardView()

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
  console.log("hitting close first");
  if (event.target.classList.contains("close")){
    console.log("hitting close")
    welcomeMessageID = "welcome-message-hide";
    addDashboardView();
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
    // removeDashboardView();
    addTransactionsView();
  } else if (event.target===navAssets){
    navDashboard.classList.remove("active");
    navTransactions.classList.remove("active");
    removeDashboardView();
  }
}

// function removeDashboardView (){
//     financialOverviewSection.remove();
//     transactionOverviewSection.remove();
//   } else if (navDashboard.classList.contains("active")){
//     console.log("dash was clicked")
//     addFinancialOverview();
//     addTransactionOverview();
//   }

function addDashboardView(){
var financialOverviewSection = document.createElement('section');
  financialOverviewSection.setAttribute('class','financial-overview');
  document.getElementById('left').innerHTML= "";
  document.getElementById('right').innerHTML= "";
  financialOverviewSection.innerHTML = `
    <h1>Balancing Act</h1>
    <section id=${welcomeMessageID}>
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
}

function addTransactionsView(){
var transactionPageLeft= document.createElement('section');
  transactionPageLeft.setAttribute('class','transactions-page-view');
  document.getElementById('left').innerHTML= "";
  document.getElementById('right').innerHTML= "";
  transactionPageLeft.innerHTML =  `
  <section id="transactions-page-view">
    <div id="trans-view-header">
      <h2>Transactions</h2>
      <button class="trans-button" id="all-trans-btn">ALL</button>
      <button class="trans-button" id="inflow-trans-btn">INFLOW</button>
      <button class="trans-button" id="outflow-trans-btn">OUTFLOW</button>
    </div>
    <section class="trans-view-list">
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
        <section class="individual-transaction">
          <p class="date">Oct 24, 2019</p>
          <p class="payee">Express</p>
          <p class="inflow">-</p>
          <p class="outflow">$212.24</p>
        </section>
        <section class="individual-transaction">
          <p class="date">Oct 24, 2019</p>
          <p class="payee">Express</p>
          <p class="inflow">-</p>
          <p class="outflow">$212.24</p>
        </section>
        <section class="individual-transaction">
          <p class="date">Oct 24, 2019</p>
          <p class="payee">Express</p>
          <p class="inflow">-</p>
          <p class="outflow">$212.24</p>
        </section>
        <section class="individual-transaction">
          <p class="date">Oct 24, 2019</p>
          <p class="payee">Express</p>
          <p class="inflow">-</p>
          <p class="outflow">$212.24</p>
        </section>
        <section class="individual-transaction">
          <p class="date">Oct 24, 2019</p>
          <p class="payee">Express</p>
          <p class="inflow">-</p>
          <p class="outflow">$212.24</p>
        </section>
      </section>
    </section>
  </section>
  `
document.getElementById('left').appendChild(transactionPageLeft);

var transactionPageRight= document.createElement('section');
  transactionPageRight.setAttribute('class','new-transaction');
  transactionPageRight.innerHTML = `
  <section class="new-transaction">
      <h2>New Transaction</h2>
      <form>
        <p>Type of transaction:</p>
        <select name="trans-types">
          <option value="Expense">Expense</option>
          <option value="Deposit">Deposit</option>
        </select>
        <p>Category:</p>
        <select name="categories">
          <option value="checking">Checking</option>
          <option value="savings">Savings</option>
          <option value="credit-card">Credit Card</option>
        </select>
        <p>Account from:</p>
        <select name="accounts">
          <option value="checking">Checking</option>
          <option value="savings">Savings</option>
          <option value="credit-card">Credit Card</option>
        </select>
        <p>Payee</p>
        <input type="text"></input>
        <p>Outflow</p>
        <input type="text"></input>
        <p>Inflow</p>
        <input type="text"></input>
        <button id="log-btn">Log Expense</button>
      </form>
    </section>
  `
  document.getElementById('right').appendChild(transactionPageRight);
}
