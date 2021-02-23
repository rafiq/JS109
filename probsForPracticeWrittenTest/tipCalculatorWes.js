function getTipAndTotal(billParam, percentageParam) {
    let tip;
    if (Number.isInteger(percentageParam)) {
      tip = billParam * (percentageParam / 100);
    } else {
      tip = billParam * percentageParam;
    }
    let total = billParam + tip;
    return `The tip comes to $${tip.toFixed(2)}.\nThe total comes to $${total.toFixed(2)}.`
  }

  function getUser(inputParam) {
    let rlSync = require('readline-sync');
    return Number(rlSync.question(inputParam));
  }

  let bill = getUser("How much is the bill?\n");
  let percentage = getUser("Percentage of tip?\n");
  let result = getTipAndTotal(bill, percentage);
  console.log(result);