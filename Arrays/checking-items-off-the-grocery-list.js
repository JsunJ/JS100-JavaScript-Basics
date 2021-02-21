let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []