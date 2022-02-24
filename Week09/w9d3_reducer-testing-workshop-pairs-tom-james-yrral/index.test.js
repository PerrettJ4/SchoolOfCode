const { actionTypes, reducer } = require("./index");
const initialState = [];
describe("ADD_TO_LIST action type:", () => {
  //test("When given a string as a payload, ADD_TO_LIST should add that string to the state array.", ()=>{})
  // ARRANGE
  const expected = ["bread"];
  // ACT
  const actual = reducer(state1, actionTypes.ADD_TO_LIST);
  // ASSERT
  return expect(expected).toEqual(actual);
});
describe("REMOVE_FROM_LIST action type:", () => {
  //
});
describe("CLEAR_LIST action type:", () => {
  //
});
