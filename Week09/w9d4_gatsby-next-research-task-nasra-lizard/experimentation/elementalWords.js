const { ELEMENTS } = require("./data");
let word = "cocopuffs";

function elementalForms(word) {
  if (word.length === 0) {
    return [];
  }
  const keyMap = Object.entries(ELEMENTS).map(([key, value]) =>
    key.toLowerCase()
  );
  //   if (keyMap.includes(word.toLowerCase())) {
  //     return [`${ELEMENTS[word[0].toUpperCase() + word.substring(1)]} (${word})`];
  //   }
  // split word up into array [b, be, bea, e, ea, eac, a, ac, ach]
  const splitWord = word.toLowerCase().split("");
  let wordParts = [];
  for (let i = 0; i < splitWord.length; i++) {
    wordParts.push(splitWord[i]);
    if (i === splitWord.length - 1) {
      break;
    }
    wordParts.push(splitWord[i] + splitWord[i + 1]);
    if (i === splitWord.length - 2) {
      continue;
    }
    wordParts.push(splitWord[i] + splitWord[i + 1] + splitWord[i + 2]);
  }
  //   console.log(keyMap, splitWord);
  //   console.log(wordParts);
  // now find the ELEMENTS that fit in our word
  const symbols = wordParts.filter((symbol) => keyMap.includes(symbol));
  //   console.log("symbols:", symbols);

  // put them into object of sub-arrays of what they start with
  alphaArray = {};
  for (charIndex in splitWord) {
    startsWithArray = [];
    symbols.forEach(function (symbol) {
      if (symbol.startsWith(splitWord[charIndex])) {
        if (charIndex < splitWord.length - 2) {
          startsWithArray.push(symbol);
        } else if (charIndex < splitWord.length - 1) {
          if (symbol.length < 3) {
            startsWithArray.push(symbol);
          }
        } else if (symbol.length === 1) {
          startsWithArray.push(symbol);
        }
        // deal with the two and then deal with the one
        //
      }
    });
    alphaArray[charIndex] = startsWithArray;
  }
  console.log(alphaArray);

  //   now create recursion using a while and a random int :)
  let sym = "";
  let concatWord = [];
  let allConcatWords = [];
  let totalSymLength = 0;
  let count = 0;
  while (count < 1000000) {
    if (typeof sym == "undefined") {
      totalSymLength = 0;
      concatWord = [];
      sym = "";
      count++;
    }
    totalSymLength += sym.length;
    sym =
      alphaArray[totalSymLength][
        Math.floor(Math.random() * alphaArray[totalSymLength].length)
      ];
    concatWord.push(sym);
    if (concatWord.join("").toString() === word.toLowerCase()) {
      existCheck = allConcatWords.map((array) =>
        hasSubArray(array, concatWord)
      );
      if (existCheck.includes(true) === false) {
        // console.log("iteration no:", count, concatWord);
        allConcatWords.push(concatWord);
      }
      totalSymLength = 0;
      concatWord = [];
      sym = "";
    } else if (concatWord.join("").length == word.length) {
      totalSymLength = 0;
      concatWord = [];
      sym = "";
      count++;
    }
    count++;
  }
  console.log(allConcatWords);

  //   .includes did not work so this was the painful get around helper function
  function hasSubArray(master, sub) {
    return sub.every(
      (
        (i) => (v) =>
          (i = master.indexOf(v, i) + 1)
      )(0)
    );
  }

  //   putting result into desired format
  let result = [];
  for (subArray of allConcatWords) {
    subArray = subArray.map(
      (item) => item[0].toUpperCase() + item.substring(1)
    );
    subArray = subArray.map((item) => `${ELEMENTS[item]} (${item})`);
    result.push(subArray);
  }
  return result;
}
// console.log(elementalForms(word));

/*TOP SOLUTIONS*/

const elementalFormsTop1 = (word, acc = [], result = []) => {
  for (let i = 1; i <= 3; i += 1) {
    const el = word
      .slice(0, i)
      .toLowerCase()
      .replace(/^./, (ch) => ch.toUpperCase());
    if (!ELEMENTS[el]) continue;

    const line = [...acc, `${ELEMENTS[el]} (${el})`];
    i === word.length && result.push(line);

    elementalForms(word.slice(i), line, result);
  }
  console.log("hi");

  return result;
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

function* findForms(ws, form = []) {
  if (ws.length == 0) yield form.map((e) => ELEMENTS[e] + " (" + e + ")");
  //   console.log(ws, ws.length == 0);
  for (var i = 3; i > 0; --i) {
    if (ws.length >= i) {
      var el = ws.slice(0, i).capitalize();
      if (el in ELEMENTS) {
        form.push(el);
        yield* findForms(ws.slice(i), form);
        form.pop();
      }
    }
  }
}

export function elementalFormsTop2(word) {
  return word.length == 0 ? [] : Array.from(findForms(word));
}
// console.log(elementalFormsTop2("snack"));
