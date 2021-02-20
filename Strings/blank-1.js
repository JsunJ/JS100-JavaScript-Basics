let isBlank = string => {
  if (string) {
    return false;
  } else {
    return true;
  }
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true