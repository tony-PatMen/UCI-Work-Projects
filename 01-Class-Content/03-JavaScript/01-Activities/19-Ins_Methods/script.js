var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmaticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var myString = "Hello String";

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort();

//Logs sorted array
<<<<<<< HEAD

console.log(comparisonOperators);

=======
console.log(comparisonOperators);
>>>>>>> 25fbf8a5abd6abe34701af6d986fb92640f53179
// Adds elements to end of an array. Takes in at least one parameter
arithmaticOperators.push("%");

//Logs array with element "%" added to end
console.log(arithmaticOperators);

//Returns selected elements as a new array.
<<<<<<< HEAD
var logicalOperatorsSliced = logicalOperators.slice(0 , 1);

//Logs new array
console.log (logicalOperatorsSliced);

// The orginal array is unchanged
console.log(logicalOperators);


//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("string", "world")

//The orginal string is unchanged
console.log("myNewString")
=======
var logicalOperatorsSliced = logicalOperators.slice(0, 2);

//Logs new array
console.log(logicalOperatorsSliced);

// The orginal array is unchanged
console.log(logicalOperators);
var number = 1;
//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("String", 1);

//The orginal string is unchanged
console.log(myNewString);
>>>>>>> 25fbf8a5abd6abe34701af6d986fb92640f53179
