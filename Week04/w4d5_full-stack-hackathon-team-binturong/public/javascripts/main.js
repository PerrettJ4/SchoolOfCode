// helper fucntion for table
function createTableEntry(item) {
  let tableEntry = document.createElement('td');
  tableEntry.classList.add('table-entry');
  tableEntry.innerText = item;
  return tableEntry;
}

// making the table
async function createTable() {
  const data = await getData();
  let tbody = document.querySelector('tbody');
  for (element of data) {
    let tableRow = document.createElement('tr');
    tableRow.classList.add('table-row');
    const { id, name, score, day, energiser } = element;
    tableRow.dataset.id = id;
    tableRow.appendChild(createTableEntry(formatDate(day)));
    tableRow.appendChild(createTableEntry(energiser));
    tableRow.appendChild(createTableEntry(name));
    tableRow.appendChild(createTableEntry(score));
    tbody.appendChild(tableRow);
  }
}

function formatDate(date) {
  try {
    return date.split(/\n/).join('');
  } catch {
    return 'Date unrecorded';
  }
}

// // now list them in order of priority
// function orderAscending(ob1, ob2) {
//   num1 = ob1.priority;
//   num2 = ob2.priority;
//   return num1 - num2;
// }

// async fetch and await data from default route localhost 3000 (argument = )
// await response
// enter in table creation functions
// return payload
// pas into create tabkle function

async function getData() {
  console.log('Made it into data function');
  const response = await fetch('http://localhost:3000/scores');
  console.log(response);
  const data = await response.json();
  console.log(data);

  return data.payload;
}

createTable();

/* Plan for post request */
/* 
Select all input fields and save them to variables

Write an async function to send data to server
  Store the values of the input fields as an object
  Send the object to the database as a post request and await the response

Add an event listener to the Submit button to call the function
*/

const nameField = document.querySelector('#name');
const energiserField = document.querySelector('#energiser');
const scoreField = document.querySelector('#score');
const dateField = document.querySelector('#date');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', addScore);

async function addScore(event) {
  event.preventDefault();
  const scoreData = {
    name: nameField.value,
    day: dateField.value,
    energiser: energiserField.value,
    score: scoreField.value,
  };
  const response = await fetch('http://localhost:3000/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreData),
  });
  console.log(response);
}
