#### Assignment Objective
>Explain Higher Order Function with Example
****

- Functions that operate on other functions, either by taking them as arguments
or by returning them, are called _higher-order functions_.
- The term comes from mathematics, where the distinction between functions and other values is taken more seriously.
- Higher-order functions allow us to abstract over actions, not just values.

- They come in several forms: For example we can have 

- A higher order function is a function that takes a function as an argument, or returns a function.

Example:

```
const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;

const arrayOfFunctions = [add, subtract, multiply];

arrayOfFunctions.forEach(calculationFunction => console.log(calculationFunction(1,1))); 
output
-> 2 0 1
```

```

const addWrapper = () => (x,y) => x + y;

const add = addWrapper();

const sum1 = add (1,2); // 3

// Or we could do it like this

const sum2 = addWrapper()(4,4); 
output
->  8
```

- Functions that create new functions

Example:

```
function greaterThan(number) {
 return mNumber => mNumber > number;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

Output -> true
```

   - Functions that change other functions

Example:

```
function noisy(finagle) {
 return (...args) => {
 console.log("calling with", args);
let result = finagle(...args);
console.log("called with", args, ", returned", result);
 return result;
 };
}
noisy(Math.min)(3, 2, 1);

Output -> called with [3,2,1]
          called with [3,2,1] , returned 1
```

   - Functions that provide new types of control flow

We want the code to do a thing under a condition and another thing under another condition, this is called a controlflow. Control flow in programming is a general term used to describe things like for, if, and switch statements. 

Example:

```

const bankStatement =
      name =>
        location =>
          balance =>
            `Hello ${name}! Welcome to the bank of ${location}. Your current balance is ${balance}`;

const statementExpectingLocation = bankStatement("Omer");
const statementExpectingBalance = statementExpectingLocation("NYC");
const bankStatementMsg = statementExpectingBalance("100 million"); // wishful thinking?

console.log(bankStatementMsg); 

output
->  Hello Omer! Welcome to the bank of NYC. Your current balance is 100 million

// We could also call the function with all the arguments up front

const msg = bankStatement("Jeff Bezos")("Silicon Valley")("97.7 billion");

console.log(msg); 

output 
->  Hello Jeff Bezos! Welcome to the bank of Silicon Valley. Your current balance is 97.7 billion

```

****
Example: <code>forEach</code> as a higher order function
```
// An Array of objects

const companies = [
    {name:'company One', category : 'Finance', start:1981, end: 2003},
    {name:'company Two', category : 'Retail', start:1992, end: 2008},
    {name:'company Three', category : 'Auto', start:1999, end: 2007},
    {name:'company Four', category : 'Retail', start:1989, end: 2010},
    {name:'company Five', category : 'Technology', start:2009, end: 2014},
    {name:'company Six', category : 'Finance', start:1987, end: 2010},
    {name:'company Seven', category : 'Auto', start:1986, end: 1996},
    {name:'company Eight', category : 'Technology', start:2011, end: 2016},
    {name:'company Nine', category : 'Retail', start:1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64,32 ];

// forEach
companies.forEach(function(company, Technology) {
    console.log(company.name);
    
});

companies.forEach(function(company){
    console.log(company.category)
});

companies.forEach(function(company){
    console.log(company.start)
});

companies.forEach( institution => {
    console.log(institution.end)
});
```

Higher Order function simply is a function that operate on another function, either by taking them as arguments or by returning them.

****
**Reference**
[JavaScript and Functional Programming - Pt.2: First Class Fuctions](https://medium.com/hackernoon/javascript-and-functional-programming-pt-2-first-class-functions-4437a1aec217)