// ===============================
// 1. Normal Function
// ===============================

// function functionName(parameters) {
//     code to execute
// }

function Greet(name) {
    console.log(`Hello, ${name}`);
}

// Function calling
Greet("Selam");
Greet("Kal");


// ===============================
// 2. Function with Return
// ===============================

const add = function (a, b) {
    return a + b;
};

console.log(add(4, 6));
console.log(add(3, 8));


// ===============================
// 3. Arrow Function
// ===============================

// const functionName = (parameters) => {
//     code to execute
// };

const multiply = (a, b) => a * b;

console.log(multiply(4, 8));
console.log(multiply(9, 6));
