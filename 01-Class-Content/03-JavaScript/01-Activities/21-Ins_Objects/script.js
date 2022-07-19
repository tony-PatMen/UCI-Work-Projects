// Objects are a collection of properties
var planet = {
    name: "Earth",
    age: "4.543 billion years",
    moons: 1,
    isPopulated: true,
    neighbors: ["Venus", "Mars", "Mercury"]
};

var empty = {};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);

console.log(planet.neighbors[2]);


