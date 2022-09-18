const accounts = {
    a: 100,
    b: 0,
    c: 20
};
console.log(accounts);
function getAccount(){
    let accountName = prompt('Enter recipient login');
    if (!accounts.hasOwnProperty(accountName)){
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

function transfer(from, amount) {
    if(accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
}

// transfer(b, 100);
transfer(prompt('Enter sender login'), Number(prompt('Enter amount of money')));
console.log(accounts);