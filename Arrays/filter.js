let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

scores.forEach(num => {
  if (num >= 100) {
    count += 1;
  }
});

console.log(count); // 3