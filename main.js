function esPar(num) {
  if (num % 2 !== 0) {
    return false;
  }
  return true;
}

function factorial(num) {
  if (num < 0) {
    return NaN;
  }

  let factNum = 1;
  if (num === 0) {
    return factNum;
  }

  for (let i = 2; i <= num; i++) {
    factNum = factNum * i;
  }

  return factNum;
}
