// A variable declared in global scope is available to all functions

var hello = "hello"
//A variable declared in local scope is only available to that function
function sayHello() {
    console.log(hello);
    return;
}

var sayhelloAgain = function sayHello() {
    console.log(hello);
    return
}

sayHello();
sayhelloAgain();

//This will throw an error

function sayGoodBye() {
    var goodbye = "Goodbye";
    console.log(goodbye);
}

// Shadowing happens when the same variable is used in the local and global scope

var shadow