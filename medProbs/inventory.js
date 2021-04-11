let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];




function transactionsFor(num,type) {
    return type.filter(item => item["id"] === num)
}
function isItemAvailable(num,type) {
    let quantity = 0;
    let array = transactionsFor(num,type);

    array.forEach(item => {
        if(item["movement"] === "in") quantity += item["quantity"];
        else quantity -= item["quantity"];
    })

    if (quantity < 0) return false;
    else return true;
}
console.log(

    isItemAvailable(101, transactions),     // false
    isItemAvailable(103, transactions),     // false
    isItemAvailable(105, transactions),     // true
    // transactionsFor(101, transactions)
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
)