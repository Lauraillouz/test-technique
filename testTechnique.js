// 1 - Function that returns the maximum of two numbers
const maxTwoNumbers = (num1, num2) => {
  return Math.max(num1, num2);
};
maxTwoNumbers(1, 4);

// 2 -  Function called fozzBezz that takes a number
const fozzBezz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FozzBezz";
  } else if (num % 3 === 0) {
    return "Fozz";
  } else if (num % 5 === 0) {
    return "Bezz";
  } else {
    return num;
  }
};
fozzBezz(7);

// 3 - Function to check the speed of drivers
const checkSpeed = (speed) => {
  const overSpeed = speed - 80;
  let demeritPoints = Math.floor(overSpeed / 4);

  if (overSpeed < 0) {
    return console.log("Ok");
  }
  if (demeritPoints > 12) {
    return console.log("License suspended");
  }
  return console.log(`Points: ${demeritPoints}`);
};
checkSpeed(90);

// 4 - Function even/odd
const showNumbers = (limit) => {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(`${i} EVEN`);
    } else {
      console.log(`${i} ODD`);
    }
  }
};
showNumbers(3);

// 5 - Function that returns the sum of multiples of 3 and 5 between 0 and limit
const sumMultiples = (limit) => {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
};
sumMultiples(20);

// 6 -  Function showStars
const showStars = (rows) => {
  let stars = "";
  for (let i = 1; i <= rows; i++) {
    stars += "*";
    console.log(stars);
  }
};
showStars(5);

// 7 - Function that prints prime numbers
const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const primeNumbers = (limit) => {
  console.log(2);
  for (let i = 3; i < limit; i += 2) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};
primeNumbers(100);
