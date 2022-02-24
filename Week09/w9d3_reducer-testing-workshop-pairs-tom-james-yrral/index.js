const actionTypes = {
  ADD_TO_LIST: "ADD_TO_LIST",
  REMOVE_FROM_LIST: "REMOVE_FROM_LIST",
  CLEAR_LIST: "CLEAR_LIST",
};

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_LIST:
      return [...state, action.payload];
    case actionTypes.REMOVE_FROM_LIST:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    case actionTypes.CLEAR_LIST:
      return initialState;
    default:
      throw new Error();
  }
}

const state1 = reducer(initialState, {
  type: actionTypes.ADD_TO_LIST,
  payload: "bread",
});
const state2 = reducer(state1, {
  type: actionTypes.ADD_TO_LIST,
  payload: "eggs",
});
const state3 = reducer(state2, {
  type: actionTypes.ADD_TO_LIST,
  payload: "milk",
});
const state4 = reducer(state3, {
  type: actionTypes.ADD_TO_LIST,
  payload: "chocolate",
});
const state5 = reducer(state3, {
  type: actionTypes.REMOVE_FROM_LIST,
  payload: 3,
});

//Run node index.js to see these console.logs in action:
console.log({ initialState });
console.log({ state1 });
console.log({ state2 });
console.log({ state3 });
console.log({ state4 });
console.log({ state5 });

module.exports = { actionTypes, reducer };
