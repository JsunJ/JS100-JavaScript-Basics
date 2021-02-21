function filter(input) {
 return Array.isArray(input);
}

let someValue1 = [0, 1, 0, 0, 1];
let someValue2 = 'I leave you my Kingdom, take good care of it.';

filter(someValue1); // true
filter(someValue2); // false