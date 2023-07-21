const creaTabellone = function () {
  const Tabellone = document.getElementById("tabellone");

  for (let i = 0; i < 76; i++) {
    Tabellone.innerHTML += `<div class="cell"> ${i + 1}</div>`;
    // console.log(Tabellone);
  }
};
creaTabellone();

// ------------------------------------------------------------------------------
const arrayNum = [];
const arrayGiocatore = [];
const numRandom = function () {
  const numIndex = Math.floor(Math.random() * arrayNum.length);

  const random = arrayNum.splice(numIndex, 1);
  console.log(random);
  return random;
};
const Array = function () {
  for (let i = 0; i < 76; i++) {
    arrayNum.push(i + 1);
  }
  arrayGiocatore = arrayNum.slice();
};
Array();

const estrazione = function () {
  const numeroEstratto = numRandom();
  const celle = document.querySelectorAll(".cell");
  celle[numeroEstratto - 1].classList.add("onCasella");
  console.log(arrayNum.length);
};
const button = document.querySelector(".estrai");
button.addEventListener("click", estrazione);

const estraiCartella = document.querySelector("button:nth-of-type(2)");

const cartellina = [];
//qui otteniammo i numeri random che compongono la cartella
const buttonEstrai = () => {
  for (let i = 0; i < 24; i++) {
    const x = Math.floor(Math.random() * arrayGiocatore.length);
    cartellina.push(arrayGiocatore[x]);
    arrayGiocatore.splice(x, 1);
  }
};
//devo creare il div contenente i div con i numeri della cartella
estraiCartella.addEventListener("click", buttonEstrai);
