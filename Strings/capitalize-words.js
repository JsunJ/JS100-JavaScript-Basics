let myString = 'launch school tech & talk';

let titleCase = str => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(titleCase(myString)); // 'Launch School Tech & Talk'