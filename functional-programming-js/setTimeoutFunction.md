**Assignment Objective**
>Explain the settimeout function with example
****

- <code>setTimeout()</code> is an asynchronous JavaScript function that executes a code block or evaluates an expression through a callback function after a delay set in milliseconds.

- setTimeout function is used for asyncronous scheduling, which basically just means 'stick this function at the end of the current event queue'

Example:

    
    const timeout = () => {
    setTimeout(() => alert('Hey'), 1000);
    };
    

****
**Reference**
[JavaScript and Functional Programming - Pt.2: First Class Functions](https://medium.com/hackernoon/javascript-and-functional-programming-pt-2-first-class-functions-4437a1aec217)

You Don't Know JS : Async and Performance