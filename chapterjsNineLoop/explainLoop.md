#### Assignment Objective

- Explain Infinite Loops with Example
- Explain For loops with Example
- Explain For each loops with Example
- Explain For of loops with example
- Use the ForEach loop to loop through an array of objects and log the second property of each object to the console
- Study chapter 6 and chapter 9

****
**Infinite Loop with example**

An infinite loop circles on and on till the end of time and space, or at least until the webpage is reloaded. Infinite are considered bad things because they prevent the script from doing anything else.
Infinite loop occurs when a loop counter either doesn't get updated properly, or when it otherwise never changes to cause the loop's test condition to result in a false value.

Example:
```
let number = 5;
  while (number > 1) {
console.log('Hello Beautiful People')
}
```
****
**For Loop with example**
The for loop in particular is great for repeating something a certain amount of known times. For example, for loops are great for counting tasks, such as counting down to zero or counting up to some value.
For loop only gets executed if the test condition evaluates
to true . Once the test condition evaluates to false , the loop immediately exit with no code to run.

   A for loop consist of four different parts:

- Initialization
	
		 Initialization takes place one time, at the start of a for loop.
- Test condition
		
		The test condition checks to see if the loop should continue with another cycle.
- Action

		The action part of the loop is the code that is actually repeated in each cycle.
- Update

		The update part of the loop updates any loop variables at the end of a cycle

Example:

```
for (let index = 5; index > 1; index++){
console.log('hello, howayu');
}
```
****
**For each loops with example**
For each loops is used with JavaScript arrays. The <code>forEach()</code> method calls a function once for each element in an array, in order.

Examples:
```
const carNames = ['Passat', 'Audi', 'Beattle', 'Infinity']
carNames.forEach((carName) => { 
console.log(carName)
})         
//prints
 Passat
 Audi
 Beattle
 Inifinity
```	     

****
**For of loops with example**
The <code>for ...of</code>  statement creates a loop iterating over iterable objects including: built-in String, Array arguments, Node List, typed Array, map, set and user-defined iterables.

Syntax: 
```
for  (variable of iterable)  {
statement
}
```
Example:
```
const iterable = [10, 20, 30]
for (const value of iterable) {
console.log(value)
}
```


****
**Use the ForEach loop to loop through an array of object and log the second property of each object to the console**

Example:
``` 
const carNames = ['Passat', 'Audi', 'Beattle', 'Infinity']
carNames.forEach((carName) => { 
console.log(carNames[1])
})
//prints
Audi
Audi
Audi
Audi
```

****
**Reference**

[Web technology for developers | MDN]((https://developer.mozilla.org/en-US/docs/Web))




