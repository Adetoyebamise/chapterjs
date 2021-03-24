####Explain the difference between this block of code
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
