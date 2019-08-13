// Function constructor
/*var john = {
    name: 'John',
    dateOfBirth = 1990,
    job: 'Teacher'
}*/

/* var Person = function (name, dateOfBirth, job) {
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
jane.calculateAge(yearOfBirth); {
    return 2019 - yearOfBirth;
}

function isFullAge(age) {
    return age >= 18;
}
leydis.calculateAge();

console.log(johnDoe.lastName);
jane.lastName = 'Gordon'
console.log(jane.lastName);
console.log(leydis.lastName);

// Functions as parameters
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalculator(array, fn) {
    var arrayResult = [];
    for (var i = 0; i < array.length; i++) {
        arrayResult.push(fn(array[i]));
    }

    return arrayResult;
}

function calculateAge2(yearOfBirth) {
    return 2019 - yearOfBirth;
}

function isFullAge(age) {
    return age >= 18;
}

// Functions returning other functions
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        console.log(name + ', what subject do you teach?');
    } else {
        console.log('Hello ' + name + ', what do you do?');
    }
}

var teacherQuestion = interviewQuestion('teacher');
var teacherQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('developer');

// Closures
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirement - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

function interviewQuestionClosure(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log(name + ', what subject do you teach?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

// Bind, call & apply
var john = {
    name: 'John',
    age: 26,
    job: 'Teacher',
    presentation: function (style, timeOfTheDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfTheDay + ', ladies and gentlemen. I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age);
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age);
        }
    }
}
john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 26,
    job: 'Teacher'
}
// Method borrowing
john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['friendly', 'night']);
var jhonFriendly = john.presentation.bind(john, 'friendly');
jhonFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalculator(array, fn) {
    var arrayResult = [];
    for (var i = 0; i < array.length; i++) {
        arrayResult.push(fn(array[i]));
    }

    return arrayResult;
}

function calculateAge2(yearOfBirth) {
    return 2019 - yearOfBirth;
}

function isFullAge(age) {
    return age >= 18;
} */

// Coding Challenge
(function () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function Answer(id, text) {
        this.id = id;
        this.text = text;
    }

    function Question(questionText, answers, correctAnswer) {
        this.questionText = questionText;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    Question.prototype.showQuestion = function () {
        console.log(this.questionText);

        for (var i = 0; i < this.answers.length; i++) {
            var currentAnswer = this.answers[i];
            console.log(currentAnswer.id + ' ' + currentAnswer.text);
        }
    }
    Question.prototype.isAnswerCorrect = function (selectedOption, callback) {
        var score;

        if (selectedOption == this.correctAnswer) {
            console.log('Correct answer');
            score = callback(true);
        } else {
            console.log('Incorrect answer');
            callback(false);
        }

        this.displayScore(score)
    }
    Question.prototype.displayScore = function (score) {
        console.log('---------------');
        console.log('Score: ' + score);
        console.log('---------------');
    }

    function calculateScore() {
        var score = 0;
        return function shouldIncrement(isCorrect) {
            if (isCorrect) {
                score++;
                return score;
            }
        }
    }
    var keepScore = calculateScore();

    var question1 = new Question('Is JavaScript the coolest programming language in the world?',
        [
            {
                id: 1,
                text: 'Yes'
            },
            {
                id: 2,
                text: 'No'
            }
        ],
        1);
    var question2 = new Question('What is the name of this course\'s teacher?',
        [
            {
                id: 1,
                text: 'John'
            },
            {
                id: 2,
                text: 'Michael'
            },
            {
                id: 3,
                text: 'Jonas'
            }
        ],
        3);
    var question3 = new Question('What does best describe coding?',
        [
            {
                id: 1,
                text: 'Boring'
            },
            {
                id: 2,
                text: 'Hard'
            },
            {
                id: 3,
                text: 'Easy'
            },
            {
                id: 4,
                text: 'Tediuos'
            }
        ],
        3);

    function nextQuestion() {
        var questionsCollection = [question1, question2, question3];
        var currentQuestion = questionsCollection[getRandomInt(0, questionsCollection.length - 1)];

        currentQuestion.showQuestion();
        var userAnswer = prompt(currentQuestion.questionText);

        if (userAnswer != 'exit') {
            currentQuestion.isAnswerCorrect(userAnswer, keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();