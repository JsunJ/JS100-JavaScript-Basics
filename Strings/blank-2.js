let isBlank = string => {
  if (string === '' || /\s/.test(string)) {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true