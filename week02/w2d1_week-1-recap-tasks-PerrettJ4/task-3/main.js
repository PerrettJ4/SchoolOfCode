/* **Task 3 - Arrays and Objects**

**3.1**
Create an array and store it in a variable called vegetables.
Add a vegetable string (e.g. "broccoli") as the first item in the array. 
Leave the next two elements in the array empty.
Then add four more veggies after that. Console.log your vegetables array. */
let vegetables = ['broccoli', , , 'cucumber', 'courgette', 'aubergine', 'asparagus']
/* **3.2**
Now, use the index numbers for the two missing elements to add two more 
string values for these. Console log the array again.   */
vegetables[1] = 'carrot'
vegetables[2] = 'rhubarb'
/* **3.3**
Console.log out the length of this new array. It should be 7!  */
console.log(vegetables, vegetables.length)
/* **3.4**
Now create a new variable called 'fruits' that contains a new array with four 
fruits in it. Check the length of this too, and assign the length to a variable called 
fruitsLength. Print both of these to the console in the same log. */
let fruits = ['grape', 'apple', 'plum', 'banana']
fruitListLength = fruits.length
console.log(fruits, fruitListLength)
/* **3.5**
Loop over the fruits array, and console.log "I like" at the start of each of 
the values. For example, if your first element is "bananas", your first console.log 
will say "I like bananas." */
fruits.forEach(element => console.log(`I like ${element}.`))
/* **3.6**
Create an object called "person". In this object, create properties for name, height, 
age, hair color, eye color, whether or not they like football. 
*/
const person = {
    'name': 'James',
    'height': '188cm',
    'age': '23',
    'hairColor': 'mousey',
    'eyeColor': 'blue',
    'likesFootball': '100%'
};

/* **3.7**
Use dot notation to console.log the person's name. Use bracket notation to console.log 
the person's age. Re-assign the value of the "likesFootball" property to the opposite of 
what you started with.
*/
person.likesFootball = '500%';
personAge = person['age'];
console.log(person.name, personAge, person.likesFootball)