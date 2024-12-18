let navbar = document.querySelector("#navbar");
let logo = document.querySelector("#logo")


// evento scroll per modificare la navbar
window.addEventListener( "scroll", () => {

        logo.style.transform = `rotateZ(${window.scrollY}deg)`;

        if(window.scrollY > 0) {

            navbar.classList.add("navbarScroll")
        
        } else {

            navbar.classList.remove("navbarScroll")

        }

})


let numGiochi = document.querySelector("#numGiochi")
let numClienti = document.querySelector("#numClienti")
let numGiochiNuovi = document.querySelector("#numGiochiNuovi")


// funzione per creare un intervallo di tempo in cui stampa i numeri della sezione I NOSTRI NUMERI
function intervalloNostriNumeri (numero, elemento, tempo) {

    let counter = 0;

    let intervallo = setInterval( () => {

        if(counter < numero){

            counter ++;

            elemento.innerHTML =`${counter}+`

        } else {

            clearInterval(intervallo)
        }

    },tempo)
}

intervalloNostriNumeri(100, numGiochi, 70);
intervalloNostriNumeri(250, numClienti, 28);
intervalloNostriNumeri(30, numGiochiNuovi, 230);



