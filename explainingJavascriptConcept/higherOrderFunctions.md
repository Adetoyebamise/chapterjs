#### Assignment Objective
>Explain Higher Order Function with Example

- Functions that operate on other functions, either by taking them as arguments
or by returning them, are called _higher-order functions_.
- The term comes from mathematics, where the distinction between functions and other values is taken more seriously.
- Higher-order functions allow us to abstract over actions, not just values.

- They come in several forms: For example we can have 
    - functions that create new functions

```
function greaterThan(number) {
 return mNumber => mNumber > number;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

Output -> true
```

   - functions that change other functions

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

We want the code to do a thing under a condition and another thing under another condition, this is called a controlflow.Control flow in programming is a general term used to describe things like for, if, and switch statements. 


