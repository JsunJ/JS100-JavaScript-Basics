let calculateBMI = (weight, height) => {
  let bmi = weight / ((height / 100) ** 2);
  return bmi.toFixed(2);
}

calculateBMI(80, 180); // "24.69"