// Lecture 1: let and const

// ES5
var nameES5 = 'Jane Smith';
var ageES5 = 23;
nameES5 = 'Jane Miller';
console.log(nameES5);

// ES6
const nameES6 = 'Jane Smith';
let age = 23;
// nameES6 = 'Jane Miller';

// ES5
function driversLicense(passedTest) {
    if (passedTest) {
        var firstName = 'Jhon';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ' ' + yearOfBirth);
}
driversLicense(true);

// ES6
function driversLicenseES6(passedTest) {
    if (passedTest) {
        let firstName = 'Jhon';
        const yearOfBirth = 1990;
    }
    console.log(firstName + ' ' + yearOfBirth);
}
driversLicenseES6(true);