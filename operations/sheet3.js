function calculateFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    }
  }

exports.calculateFactorial = calculateFactorial