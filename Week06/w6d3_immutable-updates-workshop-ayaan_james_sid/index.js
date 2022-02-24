// Arrays:

// add item to end of an array
function addToEnd(array, item) {
  const newArray = [...array, item];
  return newArray;
}

// add to beginning of an array
function addToBeginning(array, item) {
  const newFrontArray = [item, ...array];
  return newFrontArray;
}

// add to middle of array
function insertItem(array, item, index) {
  const middleArray = [...array.slice(0, index), item, ...array.slice(index)];
  console.log(middleArray);
  return middleArray;
}

// replace item in array
function replaceItem(array, item, index) {
  const replaceItemFromArray = [
    ...array.slice(0, index),
    item,
    ...array.slice(index + 1),
  ];
  console.log(replaceItemFromArray);
  return replaceItemFromArray;
}

// remove item from array
function removeItem(array, index) {
  const removeItemFromArray = [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
  console.log(removeItemFromArray);
  return removeItemFromArray;
}

//Objects:

// change value of key in an object to new value

function updateName(object, update) {
  const newUpdateName = { ...object, name: update };
  console.log(newUpdateName);
  return newUpdateName;
}

// change value of key in an object to not what it is
function toggleTeaStatus(object) {
  const notWhatItIs = { ...object, needsACupOfTea: !object.needsACupOfTea };
  console.log(notWhatItIs);
  return notWhatItIs;
}

// Combo Time!!
// toggle the list item's completed value while maintaining its other properties
function toggleListItemCompleted(array, index) {
  const newArrayToggled = array.map((item) => {
    return { ...item, completed: !item["completed"] };
  });
  console.log(array);
  console.log(newArrayToggled);
  return newArrayToggled;
}

module.exports = {
  addToEnd,
  addToBeginning,
  insertItem,
  replaceItem,
  removeItem,
  updateName,
  toggleTeaStatus,
  toggleListItemCompleted,
};
