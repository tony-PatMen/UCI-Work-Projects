// We use a for-loop to execute code more than once
for (var i = 0; i < 5; i++) {
    console.log('this is the current value of i: ${i}.`)
}

// For-loops are often used to iterate over arrays

var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkates"];

//To determine how many times the loop should execute, we use the array's length

for (var i = 0 ; i < zooAnimals.lenght; i++) {
    console.log('I am going to see ${zooAnimals[i]}`);
}