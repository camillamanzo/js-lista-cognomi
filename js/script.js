// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

let cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
let cognomeUtente = prompt("inserisca il suo cognome.")

cognomi.push (cognomeUtente)

console.log (cognomi.sort())
