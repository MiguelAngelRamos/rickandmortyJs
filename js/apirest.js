// Crear las referencias
const rowCards = document.querySelector('#rowCards');
const formData = document.querySelector('#formData');

//Incio de las peticiones al Api
const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data;
};

const init = async () => {
  const characters = await getCharacters();
  console.log(characters.results);
}
init();

/* Fin de las Peticiones */

// Crear la tarjeta de bootstrap (card)

cardCharacter = (character) => {
  //Creamos los elementos html
  const cardBootstrap = document.createElement('div');
  const imgCard = document.createElement('img');
  const cardBody = document.createElement('div');
  const titleCharacter = document.createElement('h5');
  const btnByIdCharacter = document.createElement('a');

  // Añadir sus clases
  cardBootstrap.classList.add('card', 'mt-4');
  imgCard.classList.add('card-img-top', 'mt-2');
  cardBody.classList.add('card-body');
  titleCharacter.classList.add('card-title');
  btnByIdCharacter.classList.add('btn','btn-secondary');

  cardBootstrap.append(imgCard, cardBody, btnByIdCharacter);
  cardBody.append(titleCharacter);
  rowCards.append(cardBootstrap);

}




{/* 
<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<a href="#" class="mb-3 btn btn-primary">Ir a personaje</a>
</div>  
*/}


// const init  =  () => {
//   getCharacters().then( data => console.log(data.results)).catch(err => console.log(err))
// }
// init();

// funcion anonima
// () => {}

// una funcion anonima auto invocada
// (() => {})()

// (async ()=> {
//   const data = await getCharacters();
//   console.log(data);
//   console.log(data.results);
// })();