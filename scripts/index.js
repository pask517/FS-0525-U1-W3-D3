// EVENT LISTENERS
// evento di click? -> onclick
// evento di submit? -> onsubmit
// evento di scroll? -> onscroll
// ecc.

// creiamo una funzione che verrà scatenata al CLICK del bottone in HTML
const handleClick = function (t) {
  // creiamo questa funzione non con una funzione freccia per avere
  // un "this" significativo
  console.log("BOTTONE CLICCATO", t)
}

// questo è comodissimo quando avete già l'elemento da rendere cliccabile/hoverabile/
//submittabile in HTML!
// se però l' elemento in HTML ancora non esiste(perchè intendete crearlo via JS)
// questa tecnica non è più efficace!
// to be continued
