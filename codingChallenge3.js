/* John and family went on holidy and went to 3 different restaurants. Bills were $124, $48, and $268.

To tip waiter, John create a tip calcuator (as a function). He likes to tip:
20% of the bill when bill is less than $50,
15% when the bill is between $50 and $200,
10% if the bill is more than $200.

In the end, John would like 2 arrays: 
1) Containing all three tips (one for each bill);
2) Containing all three final paid amounts (bill + tip)
*/
var bills = [124, 48, 268]
var tips = [];
var amountToPay = [];

tips = returnTips(bills);
console.log(tips);

amountsToPay = amountsToPay(tips, bills);
console.log(amountsToPay);

function returnTips(bills){
   var tipPercentage; 

   bills.forEach(function(bill){

       if (bill < 50){
           tipPercentage = .2;
       } else if (bill >= 50 && bill < 200){
           tipPercentage = .15;
       } else if (bill > 200){
           tipPercentage = .1;
       }

       tips.push(tipPercentage);
   })

   return tips;
}

function amountsToPay(tips, bills){
    if (tips === null){
        return 'Nothing to pay! hoorah!'
    }
    else {
        var i = 0;
        bills.forEach(function(bill){
            amountToPay.push('$' + (bill + (bill * tips[i])));
            i++;
        })
    }
    return amountToPay;
}