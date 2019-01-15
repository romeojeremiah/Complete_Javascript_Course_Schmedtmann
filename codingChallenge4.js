/*
Using the concepts from codingChallenge1:
1. For Mark and John, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return
it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective
BMI.
*/

var mark = {
    fullname: 'Mark',
    mass: 80,
    height: 1.71,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var john = {
    fullname: 'John',
    mass: 80,
    height: 1.63,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi){
    console.log('Mark has the highest BMI');
    console.log('Mark\'s BMI is :' + mark.bmi);
} else if (mark.bmi < john.bmi){
    console.log('John has the highest BMI');
    console.log('John\'s BMI is :' + john.bmi);
} else {
    console.log('Both BMIs are the same! How weird!');
}