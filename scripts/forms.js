// il modo corretto per gestire i dati raccolti in un form è interagire con
// il suo evento di "submit"
// l'evento di submit avviene quando il form sta venendo "inviato",che significa
// quando viene premuto un bottone all'interno del tag <form> o quando viene
// rilevata una pressione del tasto "ENTER" (invio) dentro uno degli input

// gestiamo quindi l'evento di submit:

//1)l'evento di submit avviene sul TAG FORM, quindi recupero un riferimento
const form = document.getElementById("main-form")
// 2) lavoriamo con il suo event listener di submit
form.addEventListener("submit", function (e) {
  // qui dentro decideremo cosa fare una volta che il form viene inviato!
  // NB!!!
  // la PRIMA cosa da fare qui dentro è DISABILITARE il comportamento
  // di default del browser, perchè il browser altrimenti si riavvierà
  e.preventDefault() // <-- NECESSARIO

  console.log("FORM INVIATO", e)

  //   ora possiamo fare quello che vogliamo :)
  // tipicamente adesso si cerca di raccogliere i dati inseriti dall'utente

  // 1) si identificano in JS tutti i campi INPUT del form
  const firstNameInput = document.getElementById("firstname")
  const lastNameInput = document.getElementById("lastname")
  const ageInput = document.getElementById("age")
  const emailInput = document.getElementById("email")
  const genderInput = document.getElementById("gender")
  const bioInput = document.getElementById("bio")

  // 2) ora ,da ogni input, estrapoleremo il VALORE INSERITO
  const valoreNome = firstNameInput.value
  const valoreCognome = lastNameInput.value
  const valoreEtà = ageInput.value
  const valoreEmail = emailInput.value
  const valoreGender = genderInput.value
  const valoreBio = bioInput.value

  //   3) ora i dati sono stati raccolti e salvati in costanti.Potremmo farne ciò che vorremo
  // come per esempio un console.log()
  console.log("DATI RACCOLTI:", {
    nome: valoreNome, //"Andrea"
    cognome: valoreCognome, //"Pascarella"
    età: valoreEtà, //25
  })
})
