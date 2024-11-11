if (score >= 90) {
    return "A     ";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }

console.log(calculateGrade(95)); // A
console.log(calculateGrade(85)); // B
console.log(calculateGrade(75)); // C
console.log(calculateGrade(65)); // D
console.log(calculateGrade(55)); // F



