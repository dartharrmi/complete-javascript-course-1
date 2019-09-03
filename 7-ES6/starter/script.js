/* /////////////////////////////////////////////////////////////
//                Lecture 1: let and const                 //
/////////////////////////////////////////////////////////////

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
    let firstName = 'Jhon';
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'Jhon';
    }
    console.log(firstName + ' ' + yearOfBirth);
}
driversLicenseES6(true);

/////////////////////////////////////////////////////////////
//             Lecture 2: Blocks and IIFEs                 //
/////////////////////////////////////////////////////////////

// ES5
(function () {
    var c = 3;
})();
console.log(c);

// ES6
{
    const a = 1;
    let b = 2;
}
console.log(a + b);

/////////////////////////////////////////////////////////////
//                   Lecture 2: Strings                    //
/////////////////////////////////////////////////////////////
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1991;
function calculateAge(year) {
    return 2019 - year;
}

// ES5
console.log('this is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + ' and he is ' + calculateAge(yearOfBirth));

//ES6
console.log(` This is ${firstName} ${lastName}. He was born in ${yearOfBirth} and he is ${calculateAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('Sm'));
console.log(n.includes(' '));

/////////////////////////////////////////////////////////////
//              Lecture 3: Arrow Functions                 //
/////////////////////////////////////////////////////////////
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (element) {
    return 2016 - element;
});
console.log(ages5);

// ES6
let ages6 = years.map(element => 2016 - element);
console.log(ages6);
ages6 = years.map((element, index) => `Age element ${index + 1}: ${new Date().getFullYear() - element}`);
console.log(ages6);


/////////////////////////////////////////////////////////////
//              Lecture 3: Arrow Functions  2              //
/////////////////////////////////////////////////////////////

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this;

        document.querySelector('.green').addEventListener('click', function () {
            var string = 'This is box number ' + self.position + ' and it\'s ' + self.color;
            alert(string);
        });
    }
};
// box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var string = 'This is box number ' + this.position + ' and it\'s ' + this.color;
            alert(string);
        });
    }
};
box6.clickMe();

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var string = 'This is box number ' + this.position + ' and it\'s ' + this.color;
            alert(string);
        });
    }
};
box66.clickMe();

// ES5
function Person(name) {
    this.name = name;
}
Person.prototype.myFriends5 = function (friends) {
    var array = friends.map(function (element) {
        return this.name + ' is friends with ' + element;
    }.bind(this));
    console.log(array);
}

var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

// ES5
Person.prototype.myFriends6 = function (friends) {
    var array = friends.map(element => `${this.name} is friends with ${element}`);
    console.log(array);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);

/////////////////////////////////////////////////////////////
//                       Destructuring                     //
/////////////////////////////////////////////////////////////

// ES5
var jhon = ['John', 26];
var name = jhon[0];
var age = jhon[1];

// ES6
const [name, year] = ['Jhon', 26];
console.log[name];
console.log[age];

// Destructuring an object
const object = {
    firstName: 'Jhon',
    lastName: 'Smith',
    age: 26
}
const { firstName, lastName, age } = object;
console.log(firstName);
console.log(lastName);

// Destructuring an object with different variable names
const { firstName: a, lastName: b, age: c } = object;

// Returning from functions
function calculareRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age3, retirement] = calculareRetirement(2000); */

/////////////////////////////////////////////////////////////
//                         Arrays                          //
/////////////////////////////////////////////////////////////

const boxes = document.querySelectorAll('.box');

// ES5
var boxes5 = Array.prototype.slice.call(boxes);
boxes5.forEach(function (element) {
    element.style.backgroundColor = 'dodgerblue';
});

// ES6
var boxes6 = Array.from(boxes);
Array.from(boxes).forEach(element => element.style.backgroundColor = 'dodgerblue');

// ES5
for (let index = 0; index < boxes5.length; index++) {
    if (boxes5[index].className === 'box blue') {
        continue;
    }
    boxes5[index].textContent = 'I changed to blue';
}

// ES6
for (const current of boxes6) {
    if (current.className.includes('blue')) {
        continue;
    }
    current.textContent = 'I changed to blue';
}

var agesArrays = [12, 17, 8, 21, 14, 11];

// ES5
var fullAges = agesArrays.map(function (element) {
    return element >= 18;
});
console.log(fullAges);
console.log(fullAges.indexOf(true));
console.log(agesArrays[fullAges.indexOf(true)]);

// ES6
console.log(agesArrays.findIndex(current => current >= 18));
console.log(agesArrays.find(current => current >= 18));