function walkCalculate(arr) {
  if (arr.length !== 10) {
    return false;
  }

  let x = 0;
  let y = 0;

  for (const direction of arr) {
    switch (direction) {
      case "n":
        y += 1;
        break;
      case "s":
        y -= 1;
        break;
      case "w":
        x + 1;
        break;
      case "e":
        x - 1;
        break;
      default:
        return false;
    }
  }
  return x == 0 && y == 0;
}

console.log(walkCalculate(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(walkCalculate(["n", "s", "w", "e", "n", "s", "w", "e"]));
console.log(walkCalculate(["n", "s", "w", "e", "n", "s", "w", "e", "w", "e"]));
console.log(
  walkCalculate(["n", "s", "w", "e", "n", "s", "w", "e", "w", "e", "w", "e"])
);
console.log(walkCalculate(["n", "s", "w", "e"]));
