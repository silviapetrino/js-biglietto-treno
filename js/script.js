
   //1.  chiedo i dati che mi servono all'utente 

const kilometres = parseInt(prompt("Indica i chilometri che vuoi percorrere"));
const age = parseInt(prompt("Indica la tua età"));


   //2.  stabilisco il prezzo del biglietto

const kilometerPrice = 0.21;
const ticketPrice = kilometerPrice * kilometres;

  //3. stabilisco che esiste uno sconto in base all'età 

let discount;

if(age < 18) discount = (ticketPrice * 20)/100;
if(age > 65) discount = (ticketPrice * 40)/100;

   //4. calcolo il prezzo finale meno lo sconto 

let finalPrice = (ticketPrice - discount).toFixed(2);

   //5. stampo il risultato in pagina

document.getElementById("output").innerHTML = "Il costo del tuo biglietto è" + " " + finalPrice;















// =======
