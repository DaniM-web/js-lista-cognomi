// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova


var surnameList = ["Rossi", "Brambilla", "Fumagalli", "Sciascqualattughe","Sbocciafumi","Canepazzo"];
console.log("La lista iniziale non ordinata è: " + surnameList);
var userSurname = prompt("Qual è il tuo cognome?");

surnameList.push(userSurname);
console.log("La lista dopo l'inserimento del cognome utente (non ordinata) è: " + surnameList);

var orderedList = surnameList.sort();
console.log("La lista ordinata è " + orderedList);

//Variabile per salvare la posizione del mio nome
var posizione;

for (var i = 0; i < orderedList.length; i++){
  var listaN = orderedList[i];

  //Controllare se il nome da inserito è uguale al nome che sto esaminando..
  if(userSurname == orderedList[i]) {
    posizione = i+1;
  }

  var content = document.getElementById('my_id').innerHTML;

  console.log("iterazione numero " + i + content);

  document.getElementById('my_id').innerHTML = content + " " + "<li>" + listaN + "</li>";
}
// Stampa in console la posizione del cognome nella lista
console.log("la posizione dell'utente " + userSurname + " nella lista generale è " +  i);
document.getElementById('secondo_id').innerHTML = "La posizione dell'utente " + userSurname + " nella lista alfabetica è " + posizione;
