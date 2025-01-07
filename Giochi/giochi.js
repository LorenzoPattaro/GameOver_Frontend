



fetch("../JSON/giochi.json").then( (response) => response.json()).then( (giochi) => {

    
let cardsWrapper = document.querySelector("#cardsWrapper");

// VISUALIZZAZIONE GIOCHI
function visualizzazioneCards (array) {

    cardsWrapper.innerHTML=``;

    array.forEach ( card => {

        let div = document.createElement("div");
        div.classList.add("col-12", "col-md-4", "card","bg-color-a", "m-md-5", "my-4", "p-0", "text-center");
        //  div.style.width = "18rem";

        div.innerHTML = `
                    <figure>
                    <img src="../media/${card.copertina}" class="card-img-top" alt="...">
                    </figure>
                    
                    <div class="card-body m-0">
                    <h4 class="card-title title color-s text-color-p-shadow fw-bold pb-3 mb-3 border-bottom border-2 ">${card.titolo}</h5>
                    <p class="card-text color-s">
                        ${card.descrizione}
                    </p>
                    <a href=${card.link} target="_blank" class="btn btn-outline-p">Più Informazioni</a>
                    </div>
        `
        
        cardsWrapper.appendChild(div)
    } )
}

visualizzazioneCards(giochi)
// FINE VISUALIZZAZIONI CARDS




let categoryWrapper = document.querySelector("#categoryWrapper");

// CREAZIONE CATEGORIE DINAMICHE
function setCategory () {

    let categorieMapped = giochi.map( (gioco) => gioco.categoria)
    let categorie = [];
    categorieMapped.forEach( (categoria) => {

        if(!categorie.includes(categoria)){

            categorie.push(categoria)
        }
    })

    console.log(categorie)

categorie.forEach( (categoria) => {

    let div = document.createElement("div");
    
    div.classList.add("form-check");

    div.innerHTML=
                    `
                    <input class="form-check-input" type="radio" name="radiosFilter" id="${categoria}" >
                    <label class="form-check-label color-s" for="${categoria}">
                        ${categoria}
                    </label>
                    `;
    
    categoryWrapper.appendChild(div)
    
})
}
setCategory()
// FINE CREAZIONE CATEGORIE DINAMICHE



let formCheckInputs = document.querySelectorAll(".form-check-input");

// FILTRI CATEGORIE

                                                                                // VERSIONE CORSO

// function filterByCategory (){

//     let radioBtns = Array.from(formCheckInputs) //  trasforma un insieme di elementi in un array

//     let btnChecked = radioBtns.find( (radioBtn) => radioBtn.checked == true);

//     let filtered = giochi.filter ( (gioco) => gioco.categoria == btnChecked.id)
    
//     visualizzazioneCards(filtered);
// }



formCheckInputs.forEach( (radio) =>{

    radio.addEventListener( "input", ()=>{

        // filterByCategory();                                                    // VERSIONE CORSO

        if(radio.id == "tutti"){

            visualizzazioneCards(giochi);

        } else {

            let giochiFiltered = giochi.filter( (gioco) => radio.id == gioco.categoria);

            visualizzazioneCards(giochiFiltered);

        }
    })
})
// FINE FILTRI CATEGORIE


let inputRangePrice = document.querySelector("#inputRangePrice");
let labelPrice = document.querySelector("#labelPrice");


// CREAZIONE PREZZI DINAMICI
function setMinMaxPrice(){

    let prezzoMapped = giochi.map( (gioco) => gioco.prezzo);

    let max = Math.max(...prezzoMapped);
    let min = Math.min(...prezzoMapped);

    inputRangePrice.max = max;
    inputRangePrice.min = min;
    inputRangePrice.value = max;

    labelPrice.innerHTML = inputRangePrice.max;
}
setMinMaxPrice()
// FINE CREAZIONE PREZZI DINAMICI


// FILTRI PREZZI
function filterByPrice() {

    let prezzoFiltered = giochi.filter( (gioco) => gioco.prezzo <= inputRangePrice.value);
    
    visualizzazioneCards(prezzoFiltered)
}

inputRangePrice.addEventListener( "input", ()=> {

    labelPrice.innerHTML = inputRangePrice.value;
    filterByPrice();

})
// FINE FILTRI PREZZI


})







let navbar = document.querySelector("#navbar");
let logo = document.querySelector("#logo");

// evento scroll per modificare la navbar
window.addEventListener( "scroll", () => {

    logo.style.transform = `rotateZ(${window.scrollY}deg)`;

    if(window.scrollY > 0) {

        navbar.classList.add("navbarScroll")
    
    } else {

        navbar.classList.remove("navbarScroll")

    }

})