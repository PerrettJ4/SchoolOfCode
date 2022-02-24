//Sample data to use:
const cats = [
  {
    name: 'Poppy',
    human: 'Tim',
    hobby: 'screm',
  },
  {
    name: 'Tony',
    human: 'Liz.K',
    hobby: 'cling',
  },
  {
    name: 'Narla',
    human: 'Mell',
    hobby: 'obstruct',
  },
];

const { query } = require('../index');

async function populateCatsTable() {
  for (let cat of cats) {
    const queryString =
      'INSERT INTO cats (name, human, hobby) VALUES ($1, $2, $3);';
    const response = await query(queryString, [cat.name, cat.human, cat.hobby]);
    console.log(`${cat.name} inserted into table`);
  }

  console.log('All cats inserted into table');
}

populateCatsTable();
