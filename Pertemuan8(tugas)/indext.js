//Exercise 2
//Wowor,eirene

//1.
let account = {
    name: "Eirenekurnia",
    expenses: [],
};
console.log(account);
//2. 

function addExpenses(description,amount)
{
    return account.expenses.push(amount);
}

//3.
function getAccountSummary()
{
    let totalExpenses = 0;
    let jmlFunction = function (a, b)
    {
      return a + b;
    }
    account.expenses.forEach(function(expenses) {
        totalExpenses = jmlFunction(totalExpenses,expenses);
    });

    return console.log("Total Pengeluaran " + account.name + " adalah Rp." + totalExpenses);
}

//4.
//Misalkan 
addExpenses("Beli Makanan",15000);
addExpenses("Ongkos",30000);
getAccountSummary();