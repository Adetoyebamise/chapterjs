// Declared a function and gave it a name
// Named the parameter
function workItOut(parameterFirst, parameterSecond, parameterThird)
    {
      // Set a condition and assign the string value 'divide' the third parameter
    if (parameterThird == 'divide'){
       let  result= parameterFirst/parameterSecond;
  return result
  // Set a condition and assign the string value 'multiply' the third parameter
  }else if (parameterThird == 'multiply'){ 
      let result= parameterFirst*parameterSecond; 
      return result}
  // Set a condition and assign the string value 'sum' the third parameter
    else if (parameterThird == 'sum'){
      let result=parameterFirst+parameterSecond;
    return result
    } 
  }
  // Call the function by simply writing out the name and stating the arguement
 workItOut(35,5,'divide');
 
                        