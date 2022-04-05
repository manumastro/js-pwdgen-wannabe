/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22
*/

const nome = prompt("Inserire il proprio Nome");

const cognome = prompt("Inserire il proprio Cognome");

const colore = prompt("Inserire il proprio colore preferito");

const pass = nome + cognome + colore + "22";

console.log(pass);

document.getElementById("pass-output").innerHTML +=  "La password generata è: " + pass;