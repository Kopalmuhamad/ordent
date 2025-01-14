function combineString(v, w, x) {
  let result = "";

  for (let i = 0; i < v.length; i++) {
    result += v[i] + w[i] + x[i];
  }
  return result;
}

console.log(combineString("aa", "bb", "cc"));
console.log(combineString("apanih", "nihapa", "iniapa"));
