#### Assignment Objective
>Explain the Map and Reduce Methods with Examples
**Map Method**

- The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. 

- The new array will have the same length as the input array, but its content will have been mapped to a new form by the function.

- <code>.map()</code> is a method accessible from every array in JS. The <code>.map()</code> method creates a new array with the results of calling a provided function on every element in the calling array.

        Example: 
         ```
        // triple the value of every item in a given array
const triple = (arr) => arr.map((currentItem) => currentItem * 3)

         ```
**Reduce Method**

- Another common thing to do with arrays is to compute a single value from them. Our recurring example, summing a collection of numbers, is an instance of this. Another example is finding the script with the most characters.

- The higher-order operation that represents this pattern is called reduce (some-times also called fold).

- It builds a value by repeatedly taking a single element
from the array and combining it with the current value.

- <code>.reduce()</code> is a method that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

        Example:
         ```
// sum all the elements in a given array
const sum = (arr) => arr.reduce((prev, current) => prev + current, 0)
```

****

**Reference**
[JavaScript and Functional Programming: An Introduction](https://hackernoon.com/javascript-and-functional-programming-an-introduction-286aa625e26d)




