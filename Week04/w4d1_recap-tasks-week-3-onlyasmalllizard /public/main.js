const url = '/api';

const catsSection = document.querySelector('#cats');
const getCatsButton = document.querySelector('#get-cats');

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
  const catName = document.querySelector('#catName').value;
  const humanName = document.querySelector('#humanName').value;
  const hobby = document.querySelector('#hobby').value;
  return {
    catName,
    humanName,
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

function createCatArticle({ name, human, hobby }) {
  const article = document.createElement('article');
  const h2CatName = document.createElement('h2');
  h2CatName.innerText = `Cat name: ${name}`;
  const h3HumanName = document.createElement('h3');
  h3HumanName.innerText = `Human servant: ${human}`;
  const h3Hobby = document.createElement('h3');
  h3Hobby.innerText = `Favorite hobby: ${hobby}`;
  article.appendChild(h2CatName);
  article.appendChild(h3HumanName);
  article.appendChild(h3Hobby);
  return article;
}

getCats();
