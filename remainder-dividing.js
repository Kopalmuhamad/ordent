const remainderDividing = (firstInt, secondInt) => {
  let largerInteger;
  let smallerInteger;

  if (firstInt > secondInt) {
    largerInteger = firstInt;
    smallerInteger = secondInt;
  } else if (secondInt > firstInt) {
    largerInteger = secondInt;
    smallerInteger = firstInt;
  } else if (firstInt === 0 || secondInt === 0) {
    return nan;
  }

  return largerInteger % smallerInteger;
};

console.log(remainderDividing(5, 17));
console.log(remainderDividing(72, 13));
console.log(remainderDividing(0, -1));
console.log(remainderDividing(0, 1));
