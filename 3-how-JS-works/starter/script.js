///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}
calculateAge(1991);

var jhon = {
    name: 'Miguel Arroyo',
    yearOfBirth: 1991,
    calculateAge: function () {
        this.age = 2019 - this.yearOfBirth;
        console.log(this);

        /* function inner() {
            console.log(this);
        }
        inner(); */
    }
}
jhon.calculateAge();

var mike = {
    name: 'John Arroyo',
    yearOfBirth: 1985,
}
mike.calculateAge = jhon.calculateAge;
mike.calculateAge();