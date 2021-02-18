let localGreet = locale => {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  if (language === 'en') {
    switch (region) {
      case 'US': return 'Hey!';
      case 'GB': return 'Hello!';
      case 'AU': return 'Howdy!';
    }
  }

  if (language !== 'en') {
    return greet(language);
  }
};

let extractLanguage = locale => {
  return locale.slice(0, 2);
};

let extractRegion = locale => {
  return locale.substr(3, 2);
};

let greet = langCode => {
  switch (langCode) {
    case 'en':
      return 'Hi!';
    case 'fr':
      return 'Salut!';
    case 'pt':
      return 'Olá!';
    case 'de':
      return 'Hallo!';
    case 'sv':
      return 'Hej!';
    case 'af':
      return 'Haai!';
    default:
      return 'Unrecognized Language Code.';
  }
};

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
console.log(localGreet('de_DE.UTF-8')); // 'Hallo!'
console.log(localGreet('abc123')); // 'Unrecognized Language Code.'