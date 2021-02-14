let speedLimit = 60;
let currentSpeed = 80;

// if statement condition is not enclosing both expressions and the && operator in parantheses.
if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}