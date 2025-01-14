const generateAcronym = (name) => {
  const arrName = name.split(/[\s-]+/);
  let firstChar = "";
  let result = "";
  for (let i = 0; i < arrName.length; i++) {
    if (arrName[i].toLowerCase().includes("von")) {
      firstChar = "v";
    } else {
      firstChar = arrName[i][0];
    }
    result += firstChar;
  }

  return result;
};

console.log(generateAcronym("John Doe"));
console.log(generateAcronym("Muhamad-Kopal Aljamili"));
console.log(generateAcronym("Van-Der von-Sar"));
console.log(generateAcronym("Van-Der von Sar"));
