let catAge = humanYears => {
  if (!humanYears) {
    return 0;
  }

  if (humanYears) {
    if (humanYears === 1) {
      return 15;
    } else if (humanYears === 2) {
      return 15 + 9;
    } else {
      return (humanYears - 2) * 4 + 24;
    }
  }

}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32