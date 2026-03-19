const table = document.getElementById("tabella");

for (let i = 0; i < 99; i++) {
  const cellnum = document.createElement("div"); //div dove successivamente andrà il singolo numero(h3) creato
  cellnum.classList.add("cellnum"); //aggiunta una classe al div
  cellnum.id = "cella-" + (i + 1);
  const num = document.createElement("h3"); // creato il singolo numero
  num.classList.add("special-h3");
  num.innerText = i + 1; // ho collecato l'indice "i" al "h3"
  cellnum.appendChild(num);
  table.appendChild(cellnum);
}
const numeriEstratti = []; //ho creato un arrey per i numeri lanciati

const button = document.querySelector("button"); // ho selezionato il bottone tramite html

const lancio = function () {
  // creo una funzione lancio

  return Math.floor(Math.random() * 99) + 1; //che ritorna un numero elevato casuale da 1 a 99
};

button.addEventListener("click", function () {
  //qui definisco l'evento del click
  const randomnum = lancio(); // collego la funzione alla costante
  numeriEstratti.push(randomnum); // pusho il numero nella costante
  console.log(randomnum);
  const ultimoEstratto = document.getElementById("ultimoEstratto");
  ultimoEstratto.innerText = randomnum;

  const cella = document.getElementById("cella-" + randomnum);
  if (cella) {
    cella.classList.add("estratta");
  }
});
