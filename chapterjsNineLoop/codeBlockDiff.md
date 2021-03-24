#### Explain the difference between this block of code
****

Code Block A
```

for (club of footballClubs){
   const objectValues = Object.values(club)
   const secondValues = ObjectValues[1]

   console.log(secondValue)
 };

```
Code Block B
```

 footballClubs.forEach((club) => {
 const objectValues = Object.values(club)
   const secondValue = object.Values[1];
   console.log(secondValue)
 });

```

**Difference A**


|  |  |
|--|--|
| Code Block A 	 |Code Block B  |
Code Block A does not accept function. The code block has value assigned to a particular variable declared but there is no function in the code block  | 		 Code Block B has a function, i.e a function can be passed in <code>forEach</code> loop. |


