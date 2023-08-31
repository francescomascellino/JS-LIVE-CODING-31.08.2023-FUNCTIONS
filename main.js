/* numeri random: 
generare 10 numeri random (con un for o con un while) attraverso una funzione (copiamola da w3schools) e stamparli a schermo */

function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

for (let i = 0; i < 10; i++) {

    const randomNumber = getRndInteger(1, 10);
    console.log(randomNumber);

}

/* pari o dispari: 
scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari */

/**
 * ### isEvenOrOdd
 * This function checks if a number is even or odd
 * @param {number} value A number
 * @returns {boolean} returns a boolean if the number is even (true) or odd (false)
 */
function isEvenOrOdd(value) {

    if (value % 2 === 0) {
        return true;
    }

    //else {
    return false;
    //}

}

const userNumber = 123; //prompt("scegli un numero", 12)

const treueOrFalse = isEvenOrOdd(userNumber)

console.log(treueOrFalse);

if (treueOrFalse) {

    console.log("Pari");

} else {

    console.log("Dispari");

};

const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", function () {

    console.log('Il pulsante "check" è stato cliccato');

    const numberImput = document.getElementById("numImput").value;
    console.log("Il numero inserito è =", numberImput);

    if (isEvenOrOdd(numberImput)) {

        console.log(`${numberImput} è pari`);

    } else {

        console.log(`${numberImput} è dispari`);

    };
})