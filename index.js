const creaTabellone = function () {
  const Tabellone = document.getElementById("tabellone");

  for (let i = 0; i < 76; i++) {
    Tabellone.innerHTML += `<div class="cell"> ${i + 1}</div>`;
    // console.log(Tabellone);
  }
};
creaTabellone();

// ------------------------------------------------------------------------------

const numRandom = function (min, max) {
  const numIndex = Math.floor(Math.random() * min);
  const random = range.splice(numIndex, 1)[0];
  return random;
};
let numero = [];
numero.push(numRandom(1, 76));
console.log(numero);
