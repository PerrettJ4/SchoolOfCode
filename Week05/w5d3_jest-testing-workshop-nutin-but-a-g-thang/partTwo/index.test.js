const {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
} = require("./index.js");

// 👉 2.1 - greetPerson tests:

test(`Given a string "Chris", the greetPerson function returns the correct greeting string with Chris' name`, () => {
  const actual = greetPerson("Chris");
  const expected = "Greetings, Chris";

  expect(actual).toEqual(expected);
});

test(`Given the string "Liz K", the greetPerson function returns the correct greeting string with Liz K's name`, () => {
  const actual = greetPerson("Liz K");
  const expected = "Greetings, Liz K";

  expect(actual).toBe(expected);
});

test(`When given a number instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(1);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

test(`When given a boolean instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(true);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

//👉 2.2 - Write your tests for the other functions below:

test(`doubleAndAddOne`, () => {
  const actual = doubleAndAddOne(4);
  const expected = 9;

  expect(actual).toBe(expected);
});

test(`isLongArrayTrue`, () => {
  const actual = isLongArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const expected = true;

  expect(actual).toEqual(expected);
});

test(`isLongArrayFalse`, () => {
  const actual = isLongArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const expected = false;

  expect(actual).toEqual(expected);
});

test(`addItemToArray`, () => {
  const actual = addItemToArray(["nuts", "ham"], "cheese");
  const expected = ["nuts", "ham", "cheese"];

  expect(actual).toEqual(expected);
});

test(`addItemToArray`, () => {
  const actual = addItemToArray(["nuts", "ham"], "cheese");
  const expected = ["nuts", "ham", "cheese"];

  expect(actual).toEqual(expected);
});

test(`addKeyValuePairToObject`, () => {
  const actual = addKeyValuePairToObject({ scooby: "doo" }, "shaggy", "dont");
  const expected = { scooby: "doo", shaggy: "dont" };

  expect(actual).toEqual(expected);
});

test(`throwErrorIfEvenTest, Should throw error;`, () => {
  const actual = throwErrorIfEven(2);
  const expected = Error(`Error, 2 is even!`);

  expect(actual).toEqual(expected);
});
