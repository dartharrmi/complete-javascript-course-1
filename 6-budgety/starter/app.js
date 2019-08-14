// IIFE allows to have data privacy because it creates a new execution scope
var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return x + a;
    }

    // Public API
    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();

var uiController = (function() {

})();

var appController = (function(budgetController, uiController) {
    var z = budgetController.publicTest(5);

    return {
        anotherPublicMethod() {
            console.log(z)
        }
    }
})(budgetController, uiController);