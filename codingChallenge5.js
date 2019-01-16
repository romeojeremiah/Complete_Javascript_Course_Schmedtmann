var john = {
    bills: [124, 48, 268, 180, 42],
    calcTip: function(){
        for (var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 50){
                this.tips.push(.2*this.bills[i]);
                this.finalPaidAmounts.push(this.tips[i] + this.bills[i]);
            } else if (this.bills[i] >= 50 && this.bills[i] < 200){
                this.tips.push(.15*this.bills[i]);
                this.finalPaidAmounts.push(this.tips[i] + this.bills[i]);
            } else if (this.bills[i] >= 200){
                this.tips.push(.1*this.bills[i]);
                this.finalPaidAmounts.push(this.tips[i] + this.bills[i]);
           }
        }
    },
    tips: [],
    finalPaidAmounts: []
}

var mark = {
    bills: [77, 375, 110, 45],
    calcTip: function(){
        for (var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 100){
                this.tips.push(.2*this.bills[i]);
                this.finalPaidAmounts.push(this.tips[i] + this.bills[i]);
            } else if (this.bills[i] >= 100 && this.bills[i] < 300){
                this.tips.push(.1*this.bills[i]);
                this.finalPaidAmounts.push(this.tips[i] + this.bills[i]);
            } else if (this.bills[i] >= 300){
                this.tips.push(.25*this.bills[i]);
                this.finalPaidAmounts.push(this.tips[i] + this.bills[i]);
           }
        }
    },
    tips: [],
    finalPaidAmounts: []
}

john.calcTip();
var johnTips = john.tips;
var johnPayments = john.finalPaidAmounts;
for (var i = 0; i < johnTips.length; i++){
    console.log("John's bill of $" + (john.bills[i]).toFixed(2) 
    + " requires a tip amount of $" + (johnTips[i]).toFixed(2) + ", for a total payment amount of $" 
    + (johnPayments[i]).toFixed(2) + '.');
}

mark.calcTip();
var markTips = mark.tips;
var markPayments = mark.finalPaidAmounts;
for (var i = 0; i < markTips.length; i++){
    console.log("Marks's bill of $" + (mark.bills[i]).toFixed(2) 
    + " requires a tip amount of $" + (markTips[i]).toFixed(2) + ", for a total payment amount of $" 
    + (markPayments[i]).toFixed(2) + '.');
}

function calcAverage(tips){
    var tipAmount = 0;
    for (var i = 0; i < tips.length; i++){
        tipAmount = tipAmount + tips[i];
    }
    return (tipAmount / tips.length);
}

var johnsAverage = calcAverage(johnTips).toFixed(2);
var marksAverage = calcAverage(markTips).toFixed(2);

console.log('John averaged a tip amount of $' + johnsAverage + ', while Mark average a tip amount of $' + marksAverage);
if (johnsAverage > marksAverage){
    console.log('John paid the highest amount of tips.')
} else if (johnsAverage < marksAverage){
    console.log('Mark paid the highest amount of tips.')
} else {
    console.log('Both John and Mark paid the same tip average.')
}
