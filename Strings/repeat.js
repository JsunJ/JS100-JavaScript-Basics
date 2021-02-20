let repeat = (count, input) => {
  let repeatedString = '';
  
  while (count > 0) {
    repeatedString += input;
    count -= 1;
  }

  return repeatedString;
}

console.log(repeat(3, 'ha')); // hahaha