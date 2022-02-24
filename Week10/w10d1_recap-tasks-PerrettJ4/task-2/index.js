/* In ./index.test.js there is a list of groceries. In each of the below functions, use the .reduce() method to return the correct result. */

/* Task 2.1 - Return an array containing all of the item names: ['potatoes', 'chocolate', 'cheese', 'beer', 'lettuce']*/

function getItemList(shop) {
  return shop.reduce((acc, cur) => [...acc, cur.item], []);
}

/* Task 2.2 - Return the total value of all of the items as a number: 9 */

function calculateTotalCost(shop) {
  return shop.reduce((acc, cur) => acc + cur.price, 0);
}

/* Task 2.3 - Return an object which tallies the number of items which are healthy, and the number of items which are unhealthy:

{
  healthy: 3,
  unhealthy: 2
}

*/

function tallyHealthyFoods(shop) {
  return shop.reduce(
    (acc, cur) =>
      cur["healthy"]
        ? { ...acc, healthy: acc["healthy"] + 1 }
        : { ...acc, unhealthy: acc["unhealthy"] + 1 },
    { healthy: 0, unhealthy: 0 }
  );
}

module.exports = {
  getItemList,
  calculateTotalCost,
  tallyHealthyFoods,
};
