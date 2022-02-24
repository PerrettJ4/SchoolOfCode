const url = '/api';

const catsSection = document.querySelector('#cats');
const getCatsButton = document.querySelector('#get-cats');
const submitButton = document.querySelector("button[type='submit']");

// submitButton.addEventListener('click', handleSubmit);
getCatsButton.addEventListener('click', handleClick);

function handleSubmit(event) {
  event.preventDefault();
  addCatInfo();
}

async function addCatInfo() {
  console.log(gatherFormData());
  const response = await fetch(`${url}/cats`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gatherFormData()),
  });
  const data = await response.json();
  console.log(data);
}

function gatherFormData() {
  const catname = document.querySelector('#catname').value;
  const human = document.querySelector('#human').value;
  const hobby = document.querySelector('#hobby').value;
  return {
    catname,
    human,
    hobby,
  };
}

function handleClick(event) {
  event.preventDefault();
  getCats();
}

async function getCats() {
  const response = await fetch(`${url}/cats`);
  const { payload } = await response.json();
  console.log(payload);
  payload.forEach((cat) => renderCats(cat));
}

function renderCats(cat) {
  const article = createCatArticle(cat);
  catsSection.appendChild(article);
}

function createCatArticle({ catname, human, hobby }) {
  const article = document.createElement('article');
  const h2catname = document.createElement('h2');
  h2catname.innerText = `Cat catname: ${catname}`;
  const h3human = document.createElement('h3');
  h3human.innerText = `Human servant: ${human}`;
  const h3Hobby = document.createElement('h3');
  h3Hobby.innerText = `Favorite hobby: ${hobby}`;
  article.appendChild(h2catname);
  article.appendChild(h3human);
  article.appendChild(h3Hobby);
  return article;
}

getCats();
