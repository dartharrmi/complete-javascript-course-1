// IIFE allows to have data privacy because it creates a new execution scope
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var budget = {
        allItems: {
            expenses: [],
            incomes: []
        },
        totals: {
            expenses: 0,
            incomes: 0,
        },
        budget: 0,
        percentage: -1
    }
    var calculateTotal = function (type) {
        var sum = 0;
        budget.allItems[type].forEach(function (current) {
            sum += current.value;
        });
        budget.totals[type] = sum;
    };

    /* budget.prototype.getBudget = function () {
        this.budget = this.totals['incomes'] - this.totals['expenses'];
        return this.budget;
    };
    budget.prototype.getPercentageSpent = function () {
        this.percentage = Math.round((this.totals.expenses / this.totals.incomes) * 100);
        return this.percentage;
    }; */

    return {
        addItem: function (type, description, value) {
            var newItem, id;

            // Create a new id
            if (budget.allItems[type].length > 0) {
                id = budget.allItems[type][budget.allItems[type].length - 1].id + 1;
            } else {
                id = 0;
            }

            // Create a new item based on inc or exp
            if (type === 'incomes') {
                newItem = new Income(id, description, value);
            } else if (type === 'expenses') {
                newItem = new Expense(id, description, value);
            }
            budget.allItems[type].push(newItem);
            return newItem;
        },

        calculateBudget: function () {
            calculateTotal('expenses');
            calculateTotal('incomes');

            budget.budget = budget.totals['incomes'] - budget.totals['expenses']
            if (budget.totals.incomes > 0) {
                budget.percentage = Math.round((budget.totals.expenses / budget.totals.incomes) * 100);
            }
        },

        getBudget: function () {
            return {
                budget: budget.budget,
                totalInc: budget.totals.incomes,
                totalExp: budget.totals.expenses,
                percentage: budget.percentage
            };
        },

        getAllItems: function () {
            return budget;
        }
    }
})();

var uiController = (function () {

    var domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        expensesList: '.expenses__list',
        incomesList: '.income__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageValue: '.budget__expenses--percentage'
    };

    return {
        getDomStrings: function () {
            return domStrings;
        },

        getInput: function () {
            return {
                type: document.querySelector(domStrings.inputType).value,
                description: document.querySelector(domStrings.inputDescription).value,
                value: parseFloat(document.querySelector(domStrings.inputValue).value)
            }
        },

        addListItem: function (obj, type) {
            var itemHtml, newHtml, element;
            if (type === 'incomes') {
                element = domStrings.incomesList;
                itemHtml = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div ><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div >';
            } else if (type === 'expenses') {
                element = domStrings.expensesList;
                itemHtml = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div ><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div >';
            }

            newHtml = itemHtml.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
        },

        clearFields: function () {
            var fields = document.querySelectorAll(domStrings.inputDescription + ', ' + domStrings.inputValue);
            var fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function (current, index, array) {
                current.value = "";
            });
            fieldsArray[0].focus();
        },

        displayBudget: function(budget) {
            document.querySelector(domStrings.budgetLabel).textContent = budget.budget;
            document.querySelector(domStrings.incomeLabel).textContent = budget.totalInc;
            document.querySelector(domStrings.expensesLabel).textContent = budget.totalExp;

            if (budget.percentage > 0) {
                document.querySelector(domStrings.percentageValue).textContent = budget.percentage + '%';
            } else {
                document.querySelector(domStrings.percentageValue).textContent = '---';
            }
        }
    }
})();

var appController = (function (budgetController, uiController) {

    var setUpListeners = function () {
        console.log('Setting up listeners...');
        var domStrings = uiController.getDomStrings();

        document.querySelector(domStrings.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {
        var userInput = uiController.getInput();
        console.log(userInput);

        if (userInput.description !== "" && !isNaN(userInput.value) && userInput.value > 0) {
            var newItem = budgetController.addItem(userInput.type, userInput.description, userInput.value);
            uiController.addListItem(newItem, userInput.type);
            uiController.clearFields();
            updateBudget();
        }
    };

    var updateBudget = function () {
        budgetController.calculateBudget();
        var budget = budgetController.getBudget();
        uiController.displayBudget(budget);
    };

    return {
        init: function () {
            console.log('Budgety is starting...');
            setUpListeners();
            console.log('Budgety has started!');
            uiController.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
        }
    }
})(budgetController, uiController);
appController.init();