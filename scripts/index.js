// EVENT LISTENERS
// evento di click? -> onclick
// evento di submit? -> onsubmit
// evento di scroll? -> onscroll
// ecc.

// creiamo una funzione che verrà scatenata al CLICK del bottone in HTML
const handleClick = function (e) {
  // creiamo questa funzione non con una funzione freccia per avere
  // un "this" significativo
  console.log("BOTTONE CLICCATO", e)
  // lancio qui la funzione createButton(),che quindi alla pressione
  // del bottone in HTML creerà il bottone in JS

  if (violaButtons < 1) {
    createButton()
  }
}

const titleClick = function () {
  alert("Mi hai beccato")
}

const handleJSButton = function () {
  console.log("Questa è una funzione riutilizzabile")
  console.log("preparati a ricevere un orso!")
  createBear()
}

// creare un solo bottone viola
let violaButtons = 0

// questo è comodissimo quando avete già l'elemento da rendere cliccabile/hoverabile/
//submittabile in HTML!
// se però l' elemento in HTML ancora non esiste(perchè intendete crearlo via JS)
// questa tecnica non è più efficace!
// to be continued

// proviamo a creare un bottone da zero in JS,e rendiamolo cliccabile
const createButton = function () {
  // cominciamo con il creare il bottone
  const newButton = document.createElement("button") //<button></button>
  // diamogli un'etichetta
  newButton.innerText = "CREATO IN JS" //<button>CREATO IN JS</button>
  // aggiungiamo una classe CSS
  newButton.classList.add("my-btn") //<button class="my-btn">CREATO IN JS</button>

  // per applicare un comportamento al bottone(un eventlistener)
  // utilizziamo il metodo "addEventListener"

  // questa è una funzione usa e getta
  //newButton.addEventListener("click", function (e) {
  //console.log("CLICCATO BOTTONE JS",e)
  //})

  // OPPURE POTETE COLLEGARE UN EVENTO ALL'ESECUZIONE DI UNA FUNZIONE ESTERNA
  newButton.addEventListener("click", handleJSButton) //handleJSButton SENZA PARENTESI TONDE perchè altrimenti invocheremmo la funzione
  // alla pressione del primo bottone,ma deve essere collegata al click del secondo bottone e non in automatico al click del primo
  // qui dobbiamo "FORNIRE" la funzione all'event listener, NON eseguirla in automatico!!

  // inseriamolo nella pagina,finirà come ultimo elemento di #btn-container
  // selezioniamo il contenitore
  const container = document.getElementById("btn-container")
  // ce lo appendiamo dentro
  container.appendChild(newButton)

  //violaButtons=violaButtons+1
  // oppure
  // violaButtons+=1
  // oppure
  violaButtons++
}

// creiamo ora una funzione che se lanciata creerà da 0 un'immagine
// la renderà sensibile ad un evento e la posizionerà nella pagina

const createBear = function () {
  // creo una img vuota
  const newImg = document.createElement("img") //<img />
  // inserisco la sorgente dell'immagine
  newImg.setAttribute("src", "https://placebear.com/300/300")
  // inserisco la alt,cioè la descrizione dell'immagine
  newImg.setAttribute("alt", "un orso puccioso")
  // facciamo ora in modo che al passaggio del mouse l'immagine
  // si ingrandisca leggermente
  newImg.addEventListener("mouseenter", function () {
    newImg.style.transform = "scale(1.1)" //110%
  })
  // occupiamoci anche di ripristinare la scale a 1 quando il cursore esce dall'orso
  newImg.addEventListener("mouseleave", function () {
    newImg.style.transform = "scale(1)" //100%
  })
  //selezioniamo il div contenitore
  const container = document.getElementById("bear-container")
  // appendiamo l'orso nel container
  container.appendChild(newImg)
}
