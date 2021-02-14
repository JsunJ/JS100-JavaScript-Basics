let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) { // .length is being called as a method, and not a property.
  console.log('Tweet is too long!');
}