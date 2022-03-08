function XO(str) {
  // code here
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    let result = str[i].toLowerCase();

    if (result === "x") {
      countX += 1;
    } else if (result === "o") {
      countO += 1;
    }
  }

  if (countX === countO || (countX && countO === 0)) {
    return true;
  } else {
    return false;
  }
}

// CASE

console.log(XO("xo")); //true
console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("Oo")); // false
console.log(XO("ooom")); // false
console.log(XO("mmmmm")); // true
console.log(XO("xoxoxoxooxoxox")); // true
