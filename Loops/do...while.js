let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// This loop will not run at all because the condition starts out false.

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

// This loop will run once because the condition is evaluated after the body.