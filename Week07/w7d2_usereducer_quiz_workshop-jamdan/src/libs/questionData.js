//ONLY once you get your functionality sorted, change the sample text below to make your own questions and answers.

export const questions = [
  `1. Sample question 1`,
  `2. Sample question 2`,
  `3. Sample question 3`,
  `4. Sample question 4`,
  `5. Sample question 5`,
].map((questionText, id) => {
  // Safe to use array index as ID here (and for React key later) as it's stable and unique.
  // If the array gets shuffled, each question object will still contain the ID it started off with.
  return {
    id,
    questionText,
  };
});

export const answers = [
  [
    `a. sample answer choice a`,
    `b. sample answer choice b`,
    `c. sample answer choice c`,
    `d. sample answer choice d`,
  ],
  [
    `a. sample answer choice a`,
    `b. sample answer choice b`,
    `c. sample answer choice c`,
    `d. sample answer choice d`,
  ],
  [
    `a. sample answer choice a`,
    `b. sample answer choice b`,
    `c. sample answer choice c`,
    `d. sample answer choice d`,
  ],
  [
    `a. sample answer choice a`,
    `b. sample answer choice b`,
    `c. sample answer choice c`,
    `d. sample answer choice d`,
  ],
  [
    `a. sample answer choice a`,
    `b. sample answer choice b`,
    `c. sample answer choice c`,
    `d. sample answer choice d`,
  ],
].map((choices) => {
  return choices.map((choiceText, id) => {
    // Safe to use array index as ID here (and for React key later) as it's stable and unique.
    // If the array gets shuffled, each choice object will still contain the ID it started off with.
    return {
      id,
      choiceText,
    };
  });
});
