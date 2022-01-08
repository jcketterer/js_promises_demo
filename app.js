//****************** PROMISES THEN AND CATCH ****************

// let planet;

// $.getJSON('https://www.swapi.tech/api/planets/1/', (response) => {
//   planet = response;
//   console.log('done', planet);
//   $.getJSON('https://www.swapi.tech/api/planets/1/', (response) => {
//     resident = response;
//     console.log('done', resident);
//   });
// });

// let url = 'https://www.swapi.tech/api/planets/1/';
// let ourFirstPromise = axios.get(url);
// console.log('request sent');
// ourFirstPromise.then((resp) => console.log(resp.data));
// ourFirstPromise.catch((err) => console.log('REJECTED!', err));
// console.log('I am the last line');

// let url = 'https://www.swapi.tech/api/planets/1/';
// axios
//   .get(url)
//   .then((resp) => {
//     console.log(resp);
//     axios
//       .get(resp.data.residents[0])
//       .then((resp) => {
//         console.log(resp);
//       })
//       .catch((err) => {
//         console.log('ERRRORO', err);
//       });
//   })
//   .catch((err) => console.log('ERROR', err));

// let url = 'https://www.swapi.tech/api/planets/1/';
// axios
//   .get(url)
//   .then((res) => {
//     console.log(res.data);
//     return axios.get(res.data.resident[0]);
//   })
//   .then((res) => {
//     console.log(res.data);
//     return axios.get(res.data.films[0]);
//   })
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => console.log('ERROR!!!!!!!', err));

//**************CUSTOM PROMISES *************************

// function waitThreeSeconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(reject, 3000);
//   });
// }

// waitThreeSeconds()
//   .then(() => console.log('ALL DONE!'))
//   .catch(() => console.log('error'));

//Changing color function WITHOUT new Promise

// const h1 = document.querySelector('h1');
// setTimeout(function () {
//   h1.style.color = 'red';
//   setTimeout(() => {
//     h1.style.color = 'orange';
//     setTimeout(() => {
//       h1.style.color = 'yellow';
//       setTimeout(() => {
//         h1.style.color = 'green';
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//Changing color function WITH new Promise

// const h1 = document.querySelector('h1');

// function changeColor(el, color) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       el.style.color = color;
//       resolve();
//     }, 1000);
//   });
// }

// changeColor(h1, 'red')
//   .then(() => changeColor(h1, 'orange'))
//   .then(() => changeColor(h1, 'yellow'))
//   .then(() => changeColor(h1, 'green'))
//   .then(() => changeColor(h1, 'blue'))
//   .then(() => changeColor(h1, 'indigo'))
//   .then(() => changeColor(h1, 'violet'));

// Mock request example

// let mockAjaxRequest = new Promise(function (resolve, reject) {
//   let probSuccess = 0.5;
//   let requestTime = 1000;

//   // We mock a network request using a setTimeout.
//   // The request takes requestTime milliseconds.
//   // Afterwords, the promise is either resolved with data
//   // or rejected with a timeout message,
//   // based on whether randomNum is less than probSuccess.
//   setTimeout(function () {
//     let randomNum = Math.random();
//     if (randomNum < probSuccess) {
//       let data = "here's your data!";
//       resolve(data);
//     } else {
//       reject('Sorry, your request failed.');
//     }
//   }, requestTime);
// });

//Refactored mockAjaxRequest function

// function mockAjaxRequest() {
//   return new Promise(function (resolve, reject) {
//     let probSuccess = 0.5;
//     let requestTime = 1000;

// We mock a network request using a setTimeout.
// The request takes requestTime milliseconds.
// Afterwords, the promise is either resolved with data
// or rejected with a timeout message,
// based on whether randomNum is less than probSuccess.
//     setTimeout(function () {
//       let randomNum = Math.random();
//       if (randomNum < probSuccess) {
//         let data = "here's your data!";
//         resolve(data);
//       } else {
//         reject('Sorry, your request failed.');
//       }
//     }, requestTime);
//   });
// }

// mockAjaxRequest()
//   .then((data) => {
//     console.log(data);
//     return mockAjaxRequest();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

//************* PROMISE.ALL *****************

// let fourPokemonPromises = [];

// for (let i = 1; i < 5; i++) {
//   fourPokemonPromises.push(
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`),
//   );
// }

// Promise.all(fourPokemonPromises)
//   .then((pokemonArr) => {
//     for (res of pokemonArr) {
//       console.log(res.data.name);
//     }
//   })
//   .catch((err) => console.log(err));

//************************** PROMISE.RACE ********************************

let fourPokemonRace = [];

for (let i = 1; i < 5; i++) {
  fourPokemonRace.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`));
}

Promise.race(fourPokemonRace)
  .then((pokemon) => console.log(`${pokemon.data.name} won!`))
  .catch((err) => console.log(err));
