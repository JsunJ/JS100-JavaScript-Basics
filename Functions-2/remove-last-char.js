let removeLastChar = str => {
  return str.substring(0, str.length - 1);
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'