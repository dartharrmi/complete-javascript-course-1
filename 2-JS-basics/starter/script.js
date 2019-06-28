/**
 * Variables and Datatypes
 
var firstName = 'Miguel';
var lastName = 'Arroyo'
var agre = 27;
var fullAge = true;
var job;


console.log(firstName);
console.log(lastName);
console.log(agre);
console.log(fullAge);
console.log(job);

job = 'Developer';
console.log(job);
*/

/**
 * Variable muration and type coercion
var married = false;
console.log(firstName + ' ' + lastName + ' is a ' + agre + ' years old ' + job + '. Is he married? ' + married);

agre = 'twenty-seven'
job = 'salesman'
alert(firstName + ' ' + lastName + ' is a ' + agre + ' years old ' + job + '. Is he married? ' + married);

lastName = prompt('What is your lastname');
alert(firstName + ' ' + lastName + ' is a ' + agre + ' years old ' + job + '. Is he married? ' + married);
*/

/**
 * Code Challenge
 */
/* var markBMI, johnBMI;

var markWeight = prompt('Write down Mark\'s weight');
var markHeight = prompt('Write down Mark\'s height');

var johnWeight = prompt('Write down John\'s weight');
var johnHeight = prompt('Write down John\'s height');

markBMI = markWeight / Math.pow(markHeight, 2);
johnBMI = johnWeight / Math.pow(johnHeight, 2);
console.log(markBMI, johnBMI);

alert('Is Mark\'s BMI higher that Jhon\'s BMI?' + (markBMI > johnHeight)) */

/**
 * Code Challenge 2
 */
/* var jhonAverage, markAverage;

var jhonScore1 = 89;
var jhonScore2 = 120;
var jhonScore3 = 103;

var mikeScore1 = 116;
var mikeScore2 = 94;
var mikeScore3 = 123;

var maryScore1 = 97;
var maryScore2 = 134;
var maryScore3 = 123;

jhonAverage = (jhonScore1 + jhonScore2 + jhonScore3) / 3;
mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
maryAverage = (maryScore1 + maryScore2 + maryScore3) / 3;

if (jhonAverage > mikeAverage) {
    console.log("John's team won with an average of " + jhonAverage);
} else if (mikeAverage > jhonAverage) {
    console.log("Mike's team won with an average of " + mikeAverage);
} else {
    console.log("It's a draw");
} */

/* if (jhonAverage === mikeAverage && jhonAverage === maryAverage) {
    console.log("It's a draw");
} else if (jhonAverage > mikeAverage && jhonAverage > maryAverage) {
    console.log("John's team won with an average of " + jhonAverage);
} else if (mikeAverage > jhonAverage && mikeAverage > maryAverage) {
    console.log("Mike's team won with an average of " + mikeAverage);
} else {
    console.log("Mary's team won with an average of " + maryAverage);
} */

/**
 * Code Challenge 3
 */
/* function calculateTip(amount) {
    if (amount <= 50) {
        return amount * 0.20;
    } else if (amount > 50 && amount <= 200) {
        return amount * 0.15;
    } else {
        return amount * 0.10;
    }
}
var amounts = [124, 48, 268];

var tips = [calculateTip(amounts[0]), calculateTip(amounts[1]), calculateTip(amounts[2])];
console.log("Tips: " + tips);

var totals = [amounts[0] + tips[0], amounts[1] + tips[1], amounts[2] + tips[2],]
console.log("Totals: " + totals); */

/**
 * Code Challenge 4
 */
var jhon = {
    name: "Jhon Smith",
    weight: 98,
    height: 1.80,
    calculateBmi: function () {
        this.bmi = this.weight / Math.pow(this.height, 2);
        return this.bmi;
    }
}
console.log(jhon);

var mark = {
    name: "Mark Smith",
    weight: 90,
    height: 1.75,
    calculateBmi: function () {
        this.bmi = this.weight / Math.pow(this.height, 2);
        return this.bmi;
    }
}
console.log(mark);

jhon.calculateBmi();
mark.calculateBmi();

if (jhon.bmi > mark.bmi) {
    console.log("John's BMI is greater than Mark's: " + jhon);
} else if (mark.bmi > jhon.bmi) {
    console.log("Marks's BMI is greater than John's: " + mark);
} else {
    console.log("Both BMIs are equals");
}