**Assignment Objective**
>Explain the settimeout function with example
****
- setTimeout function is usd for asyncronous scheduling, which basically just means 'stick this function at the end of the current event queue'

const timeout = () => {
    setTimeout(() => alert('Hey'), 1000);
};

****
**Reference**
[JavaScript and Functional Programming - Pt.2: First Class Fuctions](https://medium.com/hackernoon/javascript-and-functional-programming-pt-2-first-class-functions-4437a1aec217

You Don't Know JS : Async and Performance