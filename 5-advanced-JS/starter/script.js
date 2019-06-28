// Function constructor
/*var john = {
    name: 'John',
    dateOfBirth = 1990,
    job: 'Teacher'
}*/

var Person = function (name, dateOfBirth, job) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function () {
    console.log(2019 - this.dateOfBirth);
};
Person.prototype.lastName = 'Smith';

var johnDoe = new Person('Jhon Doe', 1991, 'Developer');
var jane = new Person('Jane Doe', 1978, 'Designer');
var leydis = new Person('Leydis Doe', 1998, 'Teacher');

johnDoe.calculateAge();
jane.calculateAge();
leydis.calculateAge();

console.log(johnDoe.lastName);
jane.lastName = 'Gordon'
console.log(jane.lastName);
console.log(leydis.lastName);